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
  flagForOpenSlider:boolean = true;
  
  isInfoWinOpen:boolean[] = [];

     ngOnInit() {
      this.service.onPageChange$.next(false);

      $('#sights-slider').on('hidden.bs.modal', function () {
        $('.slider-init').slick('unslick');
    });


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
   
 

    OpenSliderCart(){
      
      if(!this.flagForOpenSlider){
        $('.flex-sights').slick('unslick');
        
      }
      this.flagForOpenSlider = false;
      $('.flex-sights').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          infinite:false
      });
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


}
