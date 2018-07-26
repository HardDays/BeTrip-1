import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from '../core/services/main.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MapsAPILoader, LatLng, LatLngBounds } from '@agm/core';
import { LatLonSpherical } from 'geodesy';
import { NguCarousel } from '@ngu/carousel';

import { RouteModel } from "../core/models/route.model";
import { PlaceModel } from "../core/models/place.model";
import { CoordsModel } from "../core/models/coords.model";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: MainService,
    private params: ActivatedRoute, 
    private mapsAPILoader: MapsAPILoader) { }

  carouselOne: NguCarousel;

  zoomBounds: google.maps.LatLngBounds;

  isSliderOpen: boolean = true;
  isModalVisible: boolean = false;
  isLoading: boolean = true;

  polyline: CoordsModel[] = [];
  selectedRoute: RouteModel = new RouteModel();

  lat: number = 38.678418;
  lng: number = 40.809007;

  activeRoute: number = 0;
  CurrentRoute: any = null;
  placeWindows: boolean[] = [];
  allRoutsImages: any = [];
  RouteImage: any = null;
  StepsCoord: CoordsModel[] = [];
  mapStyle = this.getMapStyle();
  flagForDropdown: boolean = false;
  InfoWindowHSize: number = 0;
  isILikeIt: boolean = false;
  isVisible = true;

  flagForOpenSlider: boolean = true;
  newFlagForVisible: boolean = false;

  ngOnInit() {
    this.service.onPageChange$.next(false);
    // this.StepsCoord.push(new CoordsModel(this.lat,this.lng));

    this.carouselOne = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
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

    this.route.params.subscribe(params => {

      this.service.getRoute(params['id']).subscribe(
        (res) => {
          this.selectedRoute = res as RouteModel;
          this.selectedRoute.image = this.service.getImageUrl(this.selectedRoute.cover_id);
          for (let k in this.selectedRoute.places) {
            this.placeWindows.push(false);
            this.selectedRoute.places[k].image = this.service.getImageUrl(this.selectedRoute.places[k].cover_id);
          }

          this.isSliderOpen = false;
          this.polyline = [];

          //this.getRouteMiddle(this.selectedRoute);

          for (var i = 0; i < this.selectedRoute.places.length - 1; i++){
            var res = this.getCurvedLine(this.selectedRoute.places[i], this.selectedRoute.places[i + 1], i % 2);
            
            for (var point of res){
              this.polyline.push(point);
            }
          }

          this.mapsAPILoader.load().then(() => {
            this.getRouteMiddle(this.selectedRoute);
          });
          this.isLoading = false;

        },
        (err) => {
          console.log(err);
        }
      );
    });


    $('#sights-slider').on('hidden.bs.modal', function () {
      $('.slider-init').slick('unslick');
    });

    //this.StepsCoord.push(new CoordsModel(this.lat+1,this.lng));


    if ($(window).scrollTop() > 35) {
      $(".fixed-sights").addClass("transformed-small");
    }
    else {
      $(".fixed-sights").removeClass("transformed-small");
    }
    $(window).scroll(function () {
      console.log($(window).scrollTop());
      if ($(window).scrollTop() > 35) {
        $(".fixed-sights").addClass("transformed-small");
      }
      else {
        $(".fixed-sights").removeClass("transformed-small");
      }
    });

    
    this.clearInfoWin();
  }

  getMapStyle() {
    return this.service.mapStyle();
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
    var to = new LatLonSpherical(maxLat, maxLng).rhumbDestinationPoint(dist * 0.5, 60)
    this.zoomBounds.extend(new google.maps.LatLng(to.lat, to.lon));
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

  clearInfoWin() {
   for (let i in this.placeWindows){
      this.placeWindows[i] = false;
    }
  }

  mapClick() {
    this.clearInfoWin();
  }
  
  markerClick(i: number) {
    //this.isInfoWinOpen[i]= !this.isInfoWinOpen[i];
    this.clearInfoWin();
    this.placeWindows[i]= !this.placeWindows[i];
    this.lat = this.selectedRoute.places[i].lat + 0.025;
    this.lng = this.selectedRoute.places[i].lng; 
  }

  ngAfterViewInit() {
    /*setTimeout(() => {

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
              slidesToShow: 6
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
    }, 300);*/
  }
}
