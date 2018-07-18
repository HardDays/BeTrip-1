import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList, NgZone } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { MainService} from '../core/services/main.service';
import {CheckboxModel} from '../core/models/checkbox.model'

import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})



export class BuildComponent implements OnInit {

  categories: CheckboxModel[] = [];
  latFrom: number = 0.0;
  lngFrom: number = 0.0;
  latTo: number = 0.0;
  lngTo: number = 0.0;
  routeType: string = "internal";

  constructor(private service:MainService,  private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone,private router: Router,
    private params: ActivatedRoute, ) {
      this.service.onPageChange$.next(false);
  }

  @ViewChild('searchFrom') public searchElementFrom: ElementRef;
  @ViewChild('searchTo') public searchElementTo: ElementRef;

  @ViewChildren('searchTo') ref: QueryList<any>; 

  ngOnInit() {
      $(".content").removeClass("all-pages");
      this.createAutocompleteFrom();

      this.categories = this.service.allCategories();
  }

  ngAfterViewInit () {
      this.ref.changes.subscribe(
        (result) => {
          this.searchElementTo = result.first;
            if (this.routeType === 'bidirectional'){
              this.createAutocompleteTo();   
            }                             
        } 
      ); 
  }

  createAutocompleteFrom(){
      this.mapsAPILoader.load().then(
          () => {
             
           let autocomplete = new google.maps.places.Autocomplete(this.searchElementFrom.nativeElement, {types:[`(cities)`]});
          
            autocomplete.addListener("place_changed", () => {
             this.ngZone.run(() => {
             let place: google.maps.places.PlaceResult = autocomplete.getPlace();  
             if(place.geometry === undefined || place.geometry === null ){
              return;
             }
             else {
              this.latFrom = autocomplete.getPlace().geometry.location.toJSON().lat;
              this.lngFrom = autocomplete.getPlace().geometry.location.toJSON().lng;
             }
           });
         });
       }
    );
  }

  createAutocompleteTo(){
    this.mapsAPILoader.load().then(
        () => {
           
         let autocomplete = new google.maps.places.Autocomplete(this.searchElementTo.nativeElement, {types:[`(cities)`]});
        
          autocomplete.addListener("place_changed", () => {
           this.ngZone.run(() => {
           let place: google.maps.places.PlaceResult = autocomplete.getPlace();  
           if(place.geometry === undefined || place.geometry === null ){
            
            return;
           }
           else {
            this.latTo = autocomplete.getPlace().geometry.location.toJSON().lat;
            this.lngTo = autocomplete.getPlace().geometry.location.toJSON().lng;
           }
        });
      });
    }
  );
}

changeRouteType(){
  if (this.routeType === 'internal'){
    this.routeType = 'bidirectional';
    this.latTo = 0.0;
    this.lngTo = 0.0;
  //  this.CreateAutocompleteTo();
  }else{
    this.routeType = 'internal';
  }
}

changeCategory(i:number){
  this.categories[i].checked = !this.categories[i].checked;
}

buildMap(){
  let params ={
    from_lat: this.latFrom,
    from_lng: this.lngFrom,
    to_lat: this.latTo,
    to_lng: this.lngTo,
    route_type: this.routeType,
    categories: this.categories.filter(cat => cat.checked).map(cat => cat.value)
  }
  this.router.navigate(['/routes', params]);
  //console.log(`build map`, this.placeFrom, this.placeTo, this.Category);
  /*this.service.RoutesCreate(this.latFrom, this.lngFrom, this.latTo, this.lngTo).subscribe(
    (res)=>{
      console.log('ok',res);
    }
  );*/
}

}
