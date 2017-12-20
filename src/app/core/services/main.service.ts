import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from '@angular/http';
import {TokenModel} from "./../models/token.model";
import {CheckboxModel} from "./../models/checkbox.model";
import {CategoryModel} from "./../models/category.model";
import { HttpService } from './http.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import { UserModel } from '../models/user.model';


@Injectable()
export class MainService{
    public onPageChange$: Subject<boolean>;
    public onLoginChange$: Subject<boolean>;


    constructor(private http: HttpService, private router: Router){
        this.onPageChange$ = new Subject();
        this.onPageChange$.next(true);

        this.onLoginChange$ = new Subject();
        this.onLoginChange$.next(false);

        this.onLoginChange$.subscribe((login)=>{
          console.log(`change login`,login);
          if(login) this.BaseInit();
        });
    }

    BaseInit(){
      this.http.BaseInitByToken(localStorage.getItem('token'));
    }

    GetClient(){
      return this.http.GetData('/get_client','');
    }
    UserLogin(email:string, password:string){
        let params = {
            email: email,
            password: password
        };
      return this.http.PostData('/auth/login',JSON.stringify(params));
    }

    GoogleLogin(token:any){
      return this.http.PostData('auth/login_google',JSON.stringify(token));
   }
    SendEmail(email:string){
      let params = {
          email: email,
      };
      return this.http.PostData('/subscribe',JSON.stringify(params));
    }

    UserRegistration(email:string, password:string){
        let params = {
            email: email,
            password: password
        };
        return this.http.PostData('/users/create',JSON.stringify(params));
    }

    UserLogout(){
      return this.http.PostData('auth/logout', '');
  }
    ParamsToUrlSearchParams(params:any):string{
      let options = new URLSearchParams();

      for(let key in params){
          let prop:any = params[key];
          if(prop){
              if( prop instanceof Array){
                  for(let i in prop){
                      if(prop[i])
                          options.append(key+"[]",prop[i]);
                  }
              }
              else
                  options.set(key,params[key]);
          }
      }
      return options.toString();
  }

 getBestRoutes(params?:any){
      
      return this.http.GetData('/routes/get_best_routes',this.ParamsToUrlSearchParams(params));
    }

    getRoutePlaces(id:number){
      
      return this.http.GetData('/routes/get_route_places/'+id,'');
    }


   

  RoutesCreate(from_place:string,to_place:string){
    let from_addr={
      "address":from_place
    }
    let data = {
        from: {
          "address":from_place
        },
        to: {
          "address":to_place
        }
    }
    console.log(`POST ROUTES CREATE`,data);
    return this.http.PostData('/routes/create',JSON.stringify(data));
}

GetPolyById(id:number){
  return this.http.GetData('/routes/get_poly/'+id,'');
}


  GetImage(id:string){
    
    return this.http.GetData('/images/get/'+id,'');
  }

  GetRouteById(id:number){
      return this.http.GetData('/routes/get/'+id,'');
  }

 
LikeRoute(route_id:number){
  return this.http.PostData('/routes/like/'+route_id,'');
}

GetIsLikedRoute(id:number){
  return this.http.GetData('/routes/is_liked/'+id,'');
}

RepostRoute(route_id:number){
  return this.http.PostData('/routes/repost/'+route_id,'');
}

    public GetAllCategory(){
        return [
            new CheckboxModel("Water","water","1.png"),
            new CheckboxModel("Mountains","mountains","2.png"),
            new CheckboxModel("Architecture","architecture","3.png"),
            new CheckboxModel("Churches","rel_building","4.png"),
            new CheckboxModel("Nature","nature","5.png"),
            new CheckboxModel("Monuments","monument","6.png")
        ];
    }


    public GetMapStyle(){
        return [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
    }

}