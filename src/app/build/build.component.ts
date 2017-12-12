import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MainService} from '../core/services/main.service';


import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})



export class BuildComponent implements OnInit {

  constructor(private service:MainService,  private mapsAPILoader: MapsAPILoader, 
    private ngZone: NgZone ) {
      this.service.onPageChange$.next(false);
     }
  @ViewChild('searchFrom') public searchElementFrom: ElementRef;
  @ViewChild('searchTo') public searchElementTo: ElementRef;
  
    ngOnInit() {
      
     this.CreateAutocompleteFrom();
      this.CreateAutocompleteTo();
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
              //this.Params.address = autocomplete.getPlace().formatted_address;
             
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

}
