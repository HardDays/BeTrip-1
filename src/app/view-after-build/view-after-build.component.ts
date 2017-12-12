import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-view-after-build',
  templateUrl: './view-after-build.component.html',
  styleUrls: ['./view-after-build.component.css']
})
export class ViewAfterBuildComponent implements OnInit, AfterViewInit {

  constructor(private service:MainService) { }
  lat: number = 51.678418;
  lng: number = 7.809007;


  flagForDropdown:boolean = false;
    ngOnInit() {
      this.service.onPageChange$.next(false);

      
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
