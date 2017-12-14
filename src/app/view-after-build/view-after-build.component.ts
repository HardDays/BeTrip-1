import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { CoordsModel } from "../core/models/coords.model";
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

  activeRoute:number = 0;
  isInfoWinOpen:boolean[] = [];
  allRoutsImages:any = [];
  StepsCoord:CoordsModel[] = [];
  Places:any[] = [];
  MapStyle = this.getMapStyle();
    isLoading:boolean = true;
  flagForDropdown:boolean = false;

  
  flagForOpenSlider:boolean = true;
  newFlagForVisible:boolean = false;

    ngOnInit() {
      this.service.onPageChange$.next(false);
     // this.StepsCoord.push(new CoordsModel(this.lat,this.lng));
      let from:string='',to:string='';
      let sub:any = this.route.params.subscribe(params => {
        //this.Params.limit = +params['limit']; // (+) converts string 'id' to a number
        if(params['from'])
           from = params['from'];
           if(params['to'])
           to = params['to'];
        
        });
       
        $('#sights-slider').on('hidden.bs.modal', function () {
          $('.slider-init').slick('unslick');
        });

        //this.StepsCoord.push(new CoordsModel(this.lat+1,this.lng));
      this.BuildMap(from,to);


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

    BuildMap(from:string,to:string){
      this.StepsCoord= [];
      this.Places = [];
      this.allRoutsImages = [];
      this.service.RoutesCreate(from,to).subscribe(
        (res)=>{

          console.log('ok',res);
          this.Places = res[this.activeRoute].places;

          for(let i=0;i<this.Places.length;i++){
            this.service.GetImage(this.Places[i].cover_id).subscribe(
              (img)=>{
                //console.log(res);
                
                this.allRoutsImages[i] = img.url;
              });
              
            }
              console.log(this.Places,this.allRoutsImages);
              
          this.service.GetPolyById(res[this.activeRoute].id).
          subscribe((poly)=>{

            console.log('poly',poly);
            for(let i=0;i<poly.routes[0].legs[0].steps.length;i++){
              this.StepsCoord.push(poly.routes[0].legs[0].steps[i].start_location);
              this.StepsCoord.push(poly.routes[0].legs[0].steps[i].end_location);
            
            }
            console.log('steps',this.StepsCoord,this.StepsCoord[0].lat);
            this.isLoading = false;
           
          });
        
        });
    }

      OpenSliderCart(index:number){
      this.newFlagForVisible = false;
     // this.allSightByRoute = this.allBestRouts[index].places;
     // console.log(this.allSightByRoute);

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
      this.isInfoWinOpen = [];
      for(let i=0;i<2;i++)this.isInfoWinOpen.push(false);
    }
    mapClick(){
      this.clearInfoWin();
    }
    markerClick(i:number){
      this.isInfoWinOpen[i]= !this.isInfoWinOpen[i];
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
