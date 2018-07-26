import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from '../core/services/main.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { LatLonSpherical } from 'geodesy';
import { NguCarousel } from '@ngu/carousel';
import { MapsAPILoader, LatLng, LatLngBounds } from '@agm/core';
import { RouteModel } from "../core/models/route.model";
import { PlaceModel } from "../core/models/place.model";
import { CoordsModel } from "../core/models/coords.model";
import { PreloaderComponent } from "../preloader/preloader.component";
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-view-after-build',
  templateUrl: './view-after-build.component.html',
  styleUrls: ['./view-after-build.component.css']
})
export class ViewAfterBuildComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private service: MainService, private params: ActivatedRoute, private mapsAPILoader: MapsAPILoader) { }

  carouselOne: NguCarousel;

  menuShowed: boolean = false;
 
  lat: number;
  lng: number;
  zoomBounds: google.maps.LatLngBounds;

  isSliderOpen: boolean = true;
  isModalVisible: boolean = false;
  isLoading: boolean = true;

  routes: RouteModel[] = [];
  polyline: CoordsModel[] = [];
  routeIndex: number = 0;
  selectedRoute: RouteModel = new RouteModel();
  placeWindows: boolean[] = [];

  mapStyle = this.getMapStyle();

  ngOnInit() {
    $(".content").addClass("all-pages");
    this.service.onPageChange$.next(false);

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

    let sub: any = this.route.params.subscribe(params => {
      $('#sights-slider').on('hidden.bs.modal', function () {
        $('.slider-init').slick('unslick');
      });

      this.mapsAPILoader.load().then(() => {
        this.zoomBounds = new google.maps.LatLngBounds();
        this.zoomBounds.extend(new google.maps.LatLng(61.29752, -9.27467));
        this.zoomBounds.extend(new google.maps.LatLng(44.254402, 43.77806));
      });

      if (params['route_type'] == 'bidirectional'){
        this.service.getBidirectionalRoute(params['from_lat'], params['from_lng'], params['to_lat'], params['to_lng'], params['categories']).subscribe(
          (res) => {
            this.routes = res;
            for (let i in res) {
              var route = this.routes[i];
              route.image = this.service.getImageUrl(route.cover_id);
              for (let k in route.places) {
                route.places[k].image = this.service.getImageUrl(route.places[k].cover_id);
              }
            }
            this.changeRoute(0);
            this.isLoading = false;
          },
          (err) =>{
            this.router.navigate(['/best', params]);
          }
        );
      }else{
        this.service.getCityRoute(params['from_lat'], params['from_lng'], params['categories']).subscribe(
          (res) => {
            this.routes = res;
            for (let i in res) {
              var route = this.routes[i];
              route.image = this.service.getImageUrl(route.cover_id);
              for (let k in route.places) {
                route.places[k].image = this.service.getImageUrl(route.places[k].cover_id);
              }
            }
            this.changeRoute(0);
            this.isLoading = false;
          },
          (err) =>{
            this.router.navigate(['/best', params]);
          }
        );
      }
    });

    if ($(window).scrollTop() > 35) {
      $(".fixed-sights").addClass("transformed-small");
    }
    else {
      $(".fixed-sights").removeClass("transformed-small");
    }
    $(window).scroll(function () {
      if ($(window).scrollTop() > 35) {
        $(".fixed-sights").addClass("transformed-small");
      }
      else {
        $(".fixed-sights").removeClass("transformed-small");
      }
    });
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

    for (var i = 0; i < 150; i++) {
      var T = i / 150.0;
      var x = Math.pow(1 - T, 2) * p1.lat + 2 * (1 - T) * T * p2.lat + Math.pow(T, 2) * p3.lat;
      var y = Math.pow(1 - T, 2) * p1.lon + 2 * (1 - T) * T * p2.lon + Math.pow(T, 2) * p3.lon;
      res.push(new CoordsModel(x, y));
    }
    return res;
  }

  getRouteMiddle(route: RouteModel) {
    var minLat = 1000000.0;
    var minLng = 1000000.0;
    var maxLat = -1000000.0;
    var maxLng = -1000000.0;
    this.zoomBounds = new google.maps.LatLngBounds();
    for (let place of route.places) {
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


  changeRoute(index: number) {
    this.selectedRoute = this.routes[index];
    this.routeIndex = index;
    this.polyline = [];

    for (var i = 0; i < this.selectedRoute.places.length - 1; i++) {
      var res = this.getCurvedLine(this.selectedRoute.places[i], this.selectedRoute.places[i + 1], i % 2);

      for (var point of res) {
        this.polyline.push(point);
      }
    }
    this.clearInfoWin();
    this.getRouteMiddle(this.selectedRoute);
  /*  setTimeout(() => {
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
    }, 200);*/
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
    this.clearInfoWin();
     this.placeWindows[i]= !this.placeWindows[i];
    this.lat = this.selectedRoute.places[i].lat + 0.025;
    this.lng = this.selectedRoute.places[i].lng; 
  }


  ngAfterViewInit() {
  }

  openRoutesMenu() {
    
    if(!this.menuShowed){
        $(".outher").slideDown(200);
        this.menuShowed = !this.menuShowed;
    }
    else{
        $(".outher").slideUp(200);
        this.menuShowed = !this.menuShowed;
    }
  }



}
