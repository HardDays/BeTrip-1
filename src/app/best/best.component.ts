import { Component, OnInit } from '@angular/core';
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
    ngOnInit() {
      this.service.onPageChange$.next(false);
      $(window).scroll(function(){
        if($(window).scrollTop() > 70){
            $(".fixed-sights").addClass("transformed");
        }
        else{
            $(".fixed-sights").removeClass("transformed");
        }
    });
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
}
