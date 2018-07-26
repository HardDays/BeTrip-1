import { Component, OnInit, ElementRef, ViewChild, NgZone,  } from '@angular/core';
import { MainService } from '../core/services/main.service';
import { AgmCoreModule } from '@agm/core';
import { MapsAPILoader, LatLng, LatLngBounds } from '@agm/core';

import { CoordsModel } from "../core/models/coords.model";
import { RouteModel } from "../core/models/route.model";
import { PlaceModel } from "../core/models/place.model";
import { PreloaderComponent } from '../preloader/preloader.component';
import { LatLonSpherical } from 'geodesy';
import { NguCarousel } from '@ngu/carousel';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {

  constructor(private service: MainService, private mapsAPILoader: MapsAPILoader) { }
  carouselOne: NguCarousel;

  zoomBounds: google.maps.LatLngBounds;
  lat: number;
  lng: number;

  isSliderOpen: boolean = true;
  isModalVisible: boolean = false;
  isLoading: boolean = true;

  routes: RouteModel[] = [];
  polyline: CoordsModel[] = [];
  selectedRoute: RouteModel = new RouteModel();
  
  placeWindows: boolean[] = [];

  params = {
    limit: 10,
    offset: 0
  }

  mapStyle = this.getMapStyle();

  ngOnInit() {
    $(".content").addClass("all-pages");
    this.service.onPageChange$.next(false);

    this.carouselOne = {
      grid: {xs: 2, sm: 3, md: 3, lg: 3, all: 0},
      slide: 1,
      speed: 400,      
      point: {
        visible: false,
        pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 0px;
            left: 0;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngucarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      loop: true,
      touch: true
    }

    $('#sights-slider').on('hidden.bs.modal', function () {
      $('.slider-init').slick('unslick');
    });

    this.mapsAPILoader.load().then(() => {
      this.zoomBounds = new google.maps.LatLngBounds();
      this.zoomBounds.extend(new google.maps.LatLng(61.29752, -9.27467));
      this.zoomBounds.extend(new google.maps.LatLng(44.254402, 43.77806));
    });
    
    this.service.getBestRoutes(this.params).subscribe(
      (res) => {
        this.routes = res as RouteModel[];

        for (let i in res) {
          var route = this.routes[i];
          route.image = this.service.getImageUrl(route.cover_id);
          console.log(route.is_liked);
          for (let k in route.places) {
            route.places[k].image = this.service.getImageUrl(route.places[k].cover_id);
          }
        }
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
      }
    );

    if ($(window).scrollTop() > 70) {
      $(".fixed-sights").addClass("transformed");
    }
    else {
      $(".fixed-sights").removeClass("transformed");
    }
    $(window).scroll(function () {
      if ($(window).scrollTop() > 70) {
        $(".fixed-sights").addClass("transformed");
      }
      else {
        $(".fixed-sights").removeClass("transformed");
      }
    });
    this.clearInfoWin();
  }

  clearInfoWin() {
   for (let i in this.placeWindows){
      this.placeWindows[i] = false;
    }
  }

  mapClick() {
    this.clearInfoWin();
  }

  markerClick(i: number) {
    this.clearInfoWin();
    this.placeWindows[i]= !this.placeWindows[i];
    this.lat = this.selectedRoute.places[i].lat + 0.025;
    this.lng = this.selectedRoute.places[i].lng; 
  }

  getCurvedLine(place: PlaceModel, nextPlace: PlaceModel, isRight: number) {
    var res: LatLonSpherical = [];

    var p1 = new LatLonSpherical(place.lat, place.lng);
    var p3 = new LatLonSpherical(nextPlace.lat, nextPlace.lng);
    var middle = p1.midpointTo(p1, p3);

    var dist = p1.distanceTo(p3);
    var head = middle.bearingTo(p3);

    var p2 = p1.rhumbDestinationPoint(dist * 0.75, head + 30 * Math.pow(-1, isRight));// new LatLonSpherical(middle.lat, middle.lon); //SphericalUtil.ComputeOffset(middle, dist * 0.2, head + 90 * Math.Pow(-1, isRight));

    for (var i = 0; i < 150; i++)
    {
        var T = i / 150.0;
        var x = Math.pow(1 - T, 2) * p1.lat + 2 * (1 - T) * T * p2.lat + Math.pow(T, 2) * p3.lat;
        var y = Math.pow(1 - T, 2) * p1.lon + 2 * (1 - T) * T * p2.lon + Math.pow(T, 2) * p3.lon;
        res.push(new CoordsModel(x, y));
    }
    return res;
  }

  getRouteMiddle(route: RouteModel){
    var minLat = 1000000.0;
    var minLng = 1000000.0;
    var maxLat = -1000000.0;
    var maxLng = -1000000.0;
    this.zoomBounds = new google.maps.LatLngBounds();
    for (let place of route.places){
      this.zoomBounds.extend(new google.maps.LatLng(place.lat, place.lng));
      
      minLat = Math.min(minLat, place.lat);
      minLng = Math.min(minLng, place.lng);
      maxLat = Math.max(maxLat, place.lat);
      maxLng = Math.max(maxLng, place.lng);
    }
    //margin from top for carousel
    var dist = new LatLonSpherical(maxLat, minLng).distanceTo(new LatLonSpherical(minLat, maxLng));
    var to = new LatLonSpherical(maxLat, minLng).rhumbDestinationPoint(dist * 0.5, 0)
    this.zoomBounds.extend(new google.maps.LatLng(to.lat, to.lon));
  }

  onRoute(index: number) {
    this.isModalVisible = true;
    this.selectedRoute = this.routes[index];

    /*if (!this.isSliderOpen) {
      $('.flex-sights').slick('unslick');
    }*/
    this.clearInfoWin();

    this.getRouteMiddle(this.selectedRoute);

    this.isSliderOpen = false;
    this.polyline = [];

    for (var i = 0; i < this.selectedRoute.places.length - 1; i++){
      var res = this.getCurvedLine(this.selectedRoute.places[i], this.selectedRoute.places[i + 1], i % 2);
      
      for (var point of res){
        this.polyline.push(point);
      }
    }

    /*setTimeout(() => {
      this.isModalVisible = true;

      $('.flex-sights').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
          {
            breakpoint: 1601,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1301,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      });
    }, 200);*/
  }

  onRoutePlace(index) {
    $("#sights-slider").modal("show");
    console.log(index);
    $('.slider-init').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: false
    });
    $('.slider-init').slick('slickGoTo', index, true);
  }

  getMapStyle() {
    return this.service.mapStyle();
  }

  onPlaceLike(place: PlaceModel) {
    this.service.likePlace(place.id)
      .subscribe(() => {
        if (place.is_liked){
          place.likes_count -= 1;
        }else{
          place.likes_count += 1;
        }
        place.is_liked = !place.is_liked;
      });
  }

  onRouteLike(route: RouteModel) {
    this.service.likeRoute(route.id)
      .subscribe(() => {
        if (route.is_liked){
          route.likes_count -= 1;
        }else{
          route.likes_count += 1;
        }
        route.is_liked = !route.is_liked;
      });
  }

  onRouteRepost(id: number) {
    this.service.repostRoute(id)
      .subscribe(() => {
        console.log(`OK REPOST`);
      });
  }
}
