import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  constructor(private service:MainService) { }

  lat: number = 51.678418;
  lng: number = 7.809007;
  flagForOpenSlider:boolean = true;

  activetab:string = "Past";


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
  }

  ChangeTab(){
    if(this.activetab == "Past"){
      this.activetab = "Upcoming";
    }
    else{
      this.activetab = "Past"
    }
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
