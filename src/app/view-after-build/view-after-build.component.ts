import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-view-after-build',
  templateUrl: './view-after-build.component.html',
  styleUrls: ['./view-after-build.component.css']
})
export class ViewAfterBuildComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: MainService,
    private params: ActivatedRoute,) { }
  lat: number = 51.678418;
  lng: number = 7.809007;


  flagForDropdown:boolean = false;
    ngOnInit() {
      this.service.onPageChange$.next(false);

      let from:string='',to:string='';
      let sub:any = this.route.params.subscribe(params => {
        //this.Params.limit = +params['limit']; // (+) converts string 'id' to a number
        if(params['from'])
           from = params['from'];
           if(params['to'])
           to = params['to'];
        
        });
      this.BuildMap(from,to);
    }


    BuildMap(from:string,to:string){
     
      this.service.RoutesCreate(from,to).subscribe(
        (res)=>{
          console.log('ok',res);
        }
      );
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
