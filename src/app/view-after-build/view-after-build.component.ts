import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { CoordsModel } from "../core/models/coords.model";
import { PreloaderComponent } from "../preloader/preloader.component";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-view-after-build',
  templateUrl: './view-after-build.component.html',
  styleUrls: ['./view-after-build.component.css']
})
export class ViewAfterBuildComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private route: ActivatedRoute,
              private service: MainService, private params: ActivatedRoute) { }

  lat: number = 38.678418;
  lng: number = 40.809007;
  zoom:number = 6;

  activeRoute:number = 0;
  isInfoWinOpen:boolean[] = [];
  allRoutsImages:any = [];
  StepsCoord:CoordsModel[] = [];
  Places:any[] = [];
  variantsRoute:any[] = [];
  MapStyle = this.getMapStyle();
  isLoading:boolean = false;
  Load:boolean = true;
  flagForDropdown:boolean = false;
  InfoWindowHSize:number = 0;
  newFlagForVisible:boolean = false;

  fromPlace:string='';
  toPlace:string='';

  ngOnInit() {
    $(".content").addClass("all-pages");
    this.service.onPageChange$.next(false);     
    let sub:any = this.route.params.subscribe(params => {
      if(params['from'])
          this.fromPlace = params['from'];
          if(params['to'])
          this.toPlace = params['to'];
      });
    
      $('#sights-slider').on('hidden.bs.modal', function () {
        $('.slider-init').slick('unslick');
      });
    this.BuildMap(this.fromPlace,this.toPlace);
  }

  getMapStyle(){
    return this.service.GetMapStyle();
  }
    
  BuildMap(from:string,to:string){
    this.service.RoutesCreate(from,to).subscribe(
      (res)=>{
        this.variantsRoute = res;
        this.GetPlaces();
      });
  }

  GetPlaces(){
    this.StepsCoord= [];
    this.Places = [];
    this.allRoutsImages = [];

    this.Places = this.variantsRoute[this.activeRoute].places;
    
    for(let i=0;i<this.Places.length;i++){
      this.service.GetImage(this.Places[i].cover_id).subscribe(
        (img)=>{ 
          this.allRoutsImages[i] = img.url;
        });   
    }
    console.log(this.Places,this.allRoutsImages);
        
    this.service.GetPolyById(this.variantsRoute[this.activeRoute].id).
    subscribe((poly)=>{
      console.log('poly',poly);
      for(let i=0;i<poly.routes[0].legs[0].steps.length;i++){
        this.StepsCoord.push(poly.routes[0].legs[0].steps[i].start_location);
        this.StepsCoord.push(poly.routes[0].legs[0].steps[i].end_location);
      }

      this.lat = this.StepsCoord[this.StepsCoord.length/2].lat;
      this.lng = this.StepsCoord[this.StepsCoord.length/2].lng;

      if(this.isLoading)
        $('.flex-sights').slick('unslick');

      setTimeout(()=>{
        this.newFlagForVisible = true;
                $('.flex-sights').slick({
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  arrows: true,
                  dots: false,
                  infinite:false,
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
              this.isLoading = false;  
              this.Load = false;
            },300);   
    });
    this.clearInfoWin();
  }


  ChangeRoute(index:number){
    this.activeRoute = index;
    this.Load = true;  
    this.isLoading = true;
    this.OpenRoute();
    this.GetPlaces();
  }

  OpenModalSights(index){
      $("#sights-slider").modal("show");
      console.log(index);
      $('.slider-init').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          infinite:false
      });
      $('.slider-init').slick('slickGoTo',index,true);
  }



    clearInfoWin(i?:number){
      let count = this.isInfoWinOpen.length;
      this.isInfoWinOpen = [];
      for(let i=0;i<count;i++)this.isInfoWinOpen.push(false);
      this.InfoWindowHSize = 0;
      if(i)  this.isInfoWinOpen[i] = !this.isInfoWinOpen[i];
    }

    mapClick(){
      this.clearInfoWin();
    }

    markerClick(i:number){
      
     this.clearInfoWin();
     this.isInfoWinOpen[i] = true;

      if( this.isInfoWinOpen[i]) this.InfoWindowHSize = 150/Math.pow(2,this.zoom);
      else this.InfoWindowHSize = 0;

      this.lat = this.Places[i].lat;
      this.lng = this.Places[i].lng;

     
    }


    ngAfterViewInit() { 
    }
    
    OpenRoute(){
      if(!this.flagForDropdown){
          $(".outher").slideDown(200);
          this.flagForDropdown = !this.flagForDropdown;
      }
      else{
          $(".outher").slideUp(200);
          this.flagForDropdown = !this.flagForDropdown;
      }
    }
    


}
