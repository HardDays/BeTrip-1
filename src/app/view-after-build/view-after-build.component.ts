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

  flagForDropdown:boolean = false;
    ngOnInit() {
      this.service.onPageChange$.next(false);
      this.StepsCoord.push(new CoordsModel(this.lat,this.lng));
      let from:string='',to:string='';
      let sub:any = this.route.params.subscribe(params => {
        //this.Params.limit = +params['limit']; // (+) converts string 'id' to a number
        if(params['from'])
           from = params['from'];
           if(params['to'])
           to = params['to'];
        
        });
       
        //this.StepsCoord.push(new CoordsModel(this.lat+1,this.lng));
      this.BuildMap(from,to);

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

          
          for(let i of this.Places){
            this.service.GetImage(i.cover_id).subscribe(
              (res)=>{
                //console.log(res);
                this.allRoutsImages.push(res.url);
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

           
          });
        
        });
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
