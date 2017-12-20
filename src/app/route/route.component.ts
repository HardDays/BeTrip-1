import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { CoordsModel } from "../core/models/coords.model";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: MainService,
    private params: ActivatedRoute) { }
  lat: number = 38.678418;
  lng: number = 40.809007;

  activeRoute:number = 0;
  CurrentRoute:any = null;
  isInfoWinOpen:boolean[] = [];
  allRoutsImages:any = [];
  RouteImage:any = null;
  StepsCoord:CoordsModel[] = [];
  Places:any[] = [];
  variantsRoute:any[] = [];
  MapStyle = this.getMapStyle();
  isLoading:boolean = true;
  flagForDropdown:boolean = false;
  InfoWindowHSize:number = 0;
  isILikeIt:boolean = false;
  isVisible = true;

  flagForOpenSlider:boolean = true;
  newFlagForVisible:boolean = false;

  RouteId:number = 0;

    ngOnInit() {
      this.service.onPageChange$.next(false);
     // this.StepsCoord.push(new CoordsModel(this.lat,this.lng));

     
      
       this.route.params.subscribe(params => {
          console.log(`id route = `, params['id']);
          this.RouteId = params['id'];
        });
       
        $('#sights-slider').on('hidden.bs.modal', function () {
          $('.slider-init').slick('unslick');
        });

        //this.StepsCoord.push(new CoordsModel(this.lat+1,this.lng));
      this.BuildMap(this.RouteId);


      if($(window).scrollTop() > 70){
        $(".fixed-sights").addClass("transformed");
    }
    else{
        $(".fixed-sights").removeClass("transformed");
    }
    $(window).scroll(function(){
      if($(window).scrollTop() > 70){
          $(".fixed-sights").addClass("transformed");
      }
      else{
          $(".fixed-sights").removeClass("transformed");
      }
  });


      this.clearInfoWin();
    }

    getMapStyle(){
      return this.service.GetMapStyle();
    }
    

    BuildMap(routeId:number){
      this.StepsCoord= [];
      this.Places = [];
      this.allRoutsImages = [];
     
     


          this.service.getRoutePlaces(routeId).subscribe((places)=>{
           this.Places = places;
           console.log(places);
            for(let i=0;i<places.length;i++){
              this.service.GetImage(places[i].cover_id).subscribe(
                (img)=>{
                  console.log(img.url);
                  
                  this.allRoutsImages[i] = img.url;
                });
                
              }

              this.service.GetIsLikedRoute(routeId).
              subscribe((like)=>{
                console.log(`is like = `,like);
                this.isILikeIt = like.is_liked;
              });

              this.service.GetRouteById(routeId).
              subscribe((thisRoute)=>{
                  this.CurrentRoute = thisRoute;
                  console.log(`!!!`,this.CurrentRoute);

                  this.service.GetImage(thisRoute.cover_id).subscribe(
                    (img)=>{
                      this.RouteImage = img.url;
                    });
                   
              });

              
           
            
          });
          
          this.service.GetPolyById(routeId).
          subscribe((poly)=>{
            console.log('poly',poly);
            for(let i=0;i<poly.routes[0].legs[0].steps.length;i++){
              this.StepsCoord.push(poly.routes[0].legs[0].steps[i].start_location);
              this.StepsCoord.push(poly.routes[0].legs[0].steps[i].end_location);
            }

            this.isLoading = false;
            this.lat = this.StepsCoord[this.StepsCoord.length/2].lat;
            this.lng = this.StepsCoord[this.StepsCoord.length/2].lng;
           
          });


       
    }

    ChangeRoute(index:number){
    
      this.activeRoute = index;
    
      this.isVisible = false;

      console.log(this.isVisible);


      setTimeout(()=>{

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
      },300);
      


      /*

      if(!this.flagForOpenSlider){
        $('.flex-sights').slick('unslick');
      }
      

      $('.flex-sights').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite:false
    });
   
      this.newFlagForVisible = false;
      this.flagForOpenSlider = false;
      
     // this.allSightByRoute = this.allBestRouts[index].places;
     // console.log(this.allSightByRoute);

      
     
  
      setTimeout(()=>{

        console.log(`123456`);
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
      },200);
      
      */

    // this.BuildMap(this.fromPlace,this.toPlace);
    
      
    }

    LikeRoute(id:number){
      this.service.LikeRoute(id)
      .subscribe(()=>{
        console.log(`OK LIKE`);

        if( this.isILikeIt)
        this.CurrentRoute.likes_count -= 1;
      else
        this.CurrentRoute.likes_count+=1;
      this.isILikeIt = !this.isILikeIt;

      });

    }

    RepostRoute(id:number){
      this.service.RepostRoute(id)
      .subscribe(()=>{
        console.log(`OK REPOST`);
      });

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



    clearInfoWin(){
      let count = this.isInfoWinOpen.length;
      this.isInfoWinOpen = [];
      for(let i=0;i<count;i++)this.isInfoWinOpen.push(false);
      this.InfoWindowHSize = 0;
    }
    mapClick(){
      this.clearInfoWin();
    }
    markerClick(i:number){
      this.isInfoWinOpen[i]= !this.isInfoWinOpen[i];
      if( this.isInfoWinOpen[i]) this.InfoWindowHSize = 1;
      else this.InfoWindowHSize = 1;
     // console.log(this.Places[i]);
      this.lat = this.Places[i].lat;
      this.lng = this.Places[i].lng;
    }

    ngAfterViewInit() {
      $('.flex-sights').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite:false
    });
      
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
