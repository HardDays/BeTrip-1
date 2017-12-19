import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { AgmCoreModule } from '@agm/core';
import { CoordsModel } from "../core/models/coords.model";
import { PreloaderComponent } from '../preloader/preloader.component';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {
  
  constructor(private service:MainService) { }
  lat: number = 45.678418;
  lng: number = 10.809007;
  MapStyle = this.getMapStyle();
  flagForOpenSlider:boolean = true;
  newFlagForVisible:boolean = false;
  Params = {
    limit:10,
    offset:0
  }
  StepsCoord:CoordsModel[] = [];
  step = parseInt(''+new Date().getTime() / 100000) % 1000;

  Load:boolean = true;

  allBestRouts:any = [];
  allBestRoutsImages:any = [];
  allSightByRoute:any = [];
  imagesSightsRoute:any = [];
  isInfoWinOpen:boolean[] = [];


 
  
     ngOnInit() {
      $(".content").addClass("all-pages");
      this.service.onPageChange$.next(false);
     
     
     console.log(this.step);

      $('#sights-slider').on('hidden.bs.modal', function () {
        $('.slider-init').slick('unslick');
      });


      this.service.getBestRoutes(this.Params).subscribe(
        (res)=>{
          this.allBestRouts = res;
          console.log(this.allBestRouts);
          for(let i in res){
            this.service.GetImage(this.allBestRouts[i].places[0].cover_id).subscribe(
              (res)=>{
                //console.log(res);
                this.allBestRoutsImages[i] = res.url;
                this.Load = false;
              

              },
              (err)=>{
                console.log(err);
              }
            );
          }
        },
        (err)=>{
          console.log(err);
        }
      );

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

    clearInfoWin(){
      this.isInfoWinOpen = [];
      for(let i=0;i<2;i++)this.isInfoWinOpen.push(false);
    }

    mapClick(){
      this.clearInfoWin();
    }
    
    markerClick(i:number){
      this.isInfoWinOpen[i]= !this.isInfoWinOpen[i];
    }
   
 

    OpenSliderCart(index:number){


      this.newFlagForVisible = false;
      this.allSightByRoute = this.allBestRouts[index].places;
      console.log(this.allSightByRoute);

      if(!this.flagForOpenSlider){
        $('.flex-sights').slick('unslick');
      }
      
      this.flagForOpenSlider = false;
     
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


      },200);
      
      console.log(`!!!`,this.allBestRouts);
      this.StepsCoord = [];
      
      this.service.GetPolyById(this.allBestRouts[index].id).
      subscribe((poly)=>{

        console.log('poly',poly);
        for(let i=0;i<poly.routes[0].legs[0].steps.length;i++){
          this.StepsCoord.push(poly.routes[0].legs[0].steps[i].start_location);
          this.StepsCoord.push(poly.routes[0].legs[0].steps[i].end_location);
        
        }
        console.log('steps',this.StepsCoord,this.StepsCoord[0].lat);
       this.lat = this.StepsCoord[this.StepsCoord.length/2].lat;
       this.lng = this.StepsCoord[this.StepsCoord.length/2].lng;
       
      });

      for(let i in this.allSightByRoute){
        this.service.GetImage(this.allSightByRoute[i].cover_id).subscribe(
          (res)=>{
            this.imagesSightsRoute[i] = res.url;
          },
          (err)=>{
            console.log(err);
          }
        );
      }
  


      
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

    getMapStyle(){
      return this.service.GetMapStyle();
    }

  

}
