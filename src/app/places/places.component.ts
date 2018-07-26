import { Component, OnInit, AfterViewInit, NgZone} from '@angular/core';
import { MainService } from '../core/services/main.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MapsAPILoader, LatLng, LatLngBounds } from '@agm/core';
import { NguCarousel } from '@ngu/carousel';
import { LatLonSpherical } from 'geodesy';
import { CheckboxModel } from '../core/models/checkbox.model'

import { RouteModel } from "../core/models/route.model";
import { PlaceModel } from "../core/models/place.model";
import { CoordsModel } from "../core/models/coords.model";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'route',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit, AfterViewInit {

  constructor(
    private zone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private service: MainService,
    private params: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader) { }

  carouselOne: NguCarousel;

  zoomBounds: google.maps.LatLngBounds;

  isSliderOpen: boolean = true;
  isFlexVisible: boolean = false;
  isLoading: boolean = true;
  isShowVisible: boolean = false;

  categories: CheckboxModel[] = [];
  places: PlaceModel[] = [];
  collectedPlaces: PlaceModel[] = [];

  placeWindows: boolean[] = [];

  lat: number = 55.78943;
  lng: number = 49.14663;
  curLat: number = 55.78943;
  curLng: number = 49.14663;
  lastLat: number = 55.78943;
  lastLng: number = 49.14663;

  flagForDropdown: boolean = false;
  InfoWindowHSize: number = 0;
  isVisible = true;

  mapStyle = this.getMapStyle();

  ngOnInit() {
    $(".content").addClass("all-pages");
    this.service.onPageChange$.next(false);
    this.categories = this.service.allCategories();

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
    
    $('#sights-slider').on('hidden.bs.modal', function () {
      $('.slider-init').slick('unslick');
    });

    this.clearInfoWin();
  }

  getMapStyle() {
    return this.service.mapStyle();
  }

  onShowHere(){
    this.loadPlaces();
  }

  filterPlaces() {
    var cats = this.categories.filter(cat => cat.checked).map(cat => cat.value);
    if (cats.length > 0) {
      this.places = this.collectedPlaces.filter(place => cats.indexOf(place.categories[0]) != -1);
    }else{
      this.places = this.collectedPlaces;
    }
    this.isFlexVisible = this.places.length > 0;

    this.placeWindows = [];
    for (let i in this.places){
      this.placeWindows.push(false);
    }
  }

  changeCategory(i: number) {
    this.categories[i].checked = !this.categories[i].checked;
    this.filterPlaces();
  }
  
  onCenterChanged(center){
    this.curLat = center.lat;
    this.curLng = center.lng;
    var dist = new LatLonSpherical(this.curLat, this.curLng).distanceTo(new LatLonSpherical(this.lastLat, this.lastLng));
    this.isShowVisible = (dist > 7000);
  }

  loadPlaces(){
    this.isLoading = true;
    this.service.getPlaces(this.curLat, this.curLng, []).subscribe(
      (res) => {
        this.collectedPlaces = res as PlaceModel[];

        for (let i in res) {
          var place = this.collectedPlaces[i];
          place.image = this.service.getImageUrl(place.cover_id);
        }
        this.clearInfoWin();  
        this.filterPlaces();
        this.lastLat = this.curLat;
        this.lastLng = this.curLng;
        this.isShowVisible = false;
        this.zone.run(()=>{
          this.isLoading = false;
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  /*
  updateFlex(){
    setTimeout(() => {
      this.isFlexVisible = true;

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
    }, 200);
  }*/

  onPlaceLike(place: PlaceModel) {
    this.service.likePlace(place.id)
      .subscribe(() => {
        if (place.is_liked) {
          place.likes_count -= 1;
        } else {
          place.likes_count += 1;
        }
        place.is_liked = !place.is_liked;
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

  clearInfoWin(i?: number) {
    for (let i in this.placeWindows){
      this.placeWindows[i] = false;
    }
  }

  mapClick() {
    this.clearInfoWin();
  }

  onMarkerClick(i: number) {
    this.clearInfoWin();
    this.placeWindows[i]= !this.placeWindows[i];
    this.lat = this.places[i].lat + 0.025;
    this.lng = this.places[i].lng; 
  }

  ngAfterViewInit() {
   this.service.getUserLocation().subscribe(
      (res) => {
        var geo = new google.maps.Geocoder();
        geo.geocode({address: res.city + ' ' + res.country}, (res, stat) => {
          if (stat == google.maps.GeocoderStatus.OK) {
              var loc = res[0].geometry.location;
              this.lat = loc.lat();
              this.lng = loc.lng();
              this.curLat = loc.lat();
              this.curLng = loc.lng();
              this.lastLat = loc.lat();
              this.lastLng = loc.lng();
          }
          this.loadPlaces();    
        }); 
      },
      (err) => {
        this.loadPlaces();
      }
    );
    //$('.flex-sights').slick('unslick');
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
