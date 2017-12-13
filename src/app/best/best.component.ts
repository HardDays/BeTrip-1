import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { AgmCoreModule } from '@agm/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {
  
  constructor(private service:MainService) { }
  lat: number = 51.678418;
  lng: number = 7.809007;
  MapStyle = this.getMapStyle();
  flagForOpenSlider:boolean = true;

  Params = {
    limit:10,
    offset:0
  }

  allBestRouts:any = [];
  allBestRoutsImages:any = [];
  allSightByRoute:any = [];
  imagesSightsRoute:any = [];


  isInfoWinOpen:boolean[] = [];

     ngOnInit() {
      this.service.onPageChange$.next(false);
     
      
      $('#sights-slider').on('hidden.bs.modal', function () {
        $('.slider-init').slick('unslick');
      });

      console.log('ok');
      this.service.getBestRoutes(this.Params).subscribe(
        (res)=>{
          this.allBestRouts = res;
          console.log(this.allBestRouts);
          for(let i in res){
            this.service.GetImage(this.allBestRouts[i].places[0].cover_id).subscribe(
              (res)=>{
                //console.log(res);
                this.allBestRoutsImages[i] = res.url;
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
      this.allSightByRoute = this.allBestRouts[index].places;
      console.log(this.allSightByRoute);

      if(!this.flagForOpenSlider){
        $('.flex-sights').slick('unslick');
      }
      
      this.flagForOpenSlider = false;
     
      setTimeout(()=>{
          $('.flex-sights').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite:false
        });
        this.flagForOpenSlider=!this.flagForOpenSlider;
      },500);
      
      
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

    OpenModalSights(){
        $("#sights-slider").modal("show");
        $('.slider-init').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite:false
        });
    }

    getMapStyle(){
      return this.service.GetMapStyle();
    }

  

}
