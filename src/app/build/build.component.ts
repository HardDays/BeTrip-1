import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
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

  Category: CheckboxModel[] = [];
  placeFrom: string='';
  placeTo: string='';

  constructor(private service:MainService,  private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone,private router: Router,
    private params: ActivatedRoute, ) {
      this.service.onPageChange$.next(false);
     }

  @ViewChild('searchFrom') public searchElementFrom: ElementRef;
  @ViewChild('searchTo') public searchElementTo: ElementRef;
  
    ngOnInit() {
      $(".content").removeClass("all-pages");
     this.CreateAutocompleteFrom();
      this.CreateAutocompleteTo();

      this.Category = this.service.GetAllCategory();
    }

  CreateAutocompleteFrom(){
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
              console.log(autocomplete.getPlace().formatted_address);
             this.placeFrom = autocomplete.getPlace().formatted_address;
             // this.Params.public_lat=autocomplete.getPlace().geometry.location.toJSON().lat;
             // this.Params.public_lng=autocomplete.getPlace().geometry.location.toJSON().lng;
             // this.lat = autocomplete.getPlace().geometry.location.toJSON().lat;
              //this.lng = autocomplete.getPlace().geometry.location.toJSON().lng;
              console.log( autocomplete.getPlace().geometry.location.toJSON().lat, autocomplete.getPlace().geometry.location.toJSON().lng);
            //  this.Params.lat = autocomplete.getPlace().geometry.location.toJSON().lat;
            //  this.Params.lng = autocomplete.getPlace().geometry.location.toJSON().lng;
             }
            });
            });
          }
             );
  
  
  }

  CreateAutocompleteTo(){
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
            //this.Params.address = autocomplete.getPlace().formatted_address;
            this.placeTo = autocomplete.getPlace().formatted_address;
           // this.Params.public_lat=autocomplete.getPlace().geometry.location.toJSON().lat;
           // this.Params.public_lng=autocomplete.getPlace().geometry.location.toJSON().lng;
           // this.lat = autocomplete.getPlace().geometry.location.toJSON().lat;
            //this.lng = autocomplete.getPlace().geometry.location.toJSON().lng;
            console.log( autocomplete.getPlace().geometry.location.toJSON().lat, autocomplete.getPlace().geometry.location.toJSON().lng);
          //  this.Params.lat = autocomplete.getPlace().geometry.location.toJSON().lat;
          //  this.Params.lng = autocomplete.getPlace().geometry.location.toJSON().lng;
           }
          });
          });
        }
           );


}


ChangeCategory(i:number){

 console.log(`change = `,i,this.Category);
  this.Category[i].checked = !this.Category[i].checked;
}

BuildMap(){
  let params ={
    from: this.placeFrom,
    to: this.placeTo
   // category: this.Category
  }
  this.router.navigate(['/routs',params]);
  /*console.log(`build map`, this.placeFrom, this.placeTo, this.Category);
  this.service.RoutesCreate(this.placeFrom,this.placeTo).subscribe(
    (res)=>{
      console.log('ok',res);
    }
  );*/
}

}
