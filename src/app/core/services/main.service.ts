import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from '@angular/http';
import { TokenModel } from "./../models/token.model";
import { CheckboxModel } from "./../models/checkbox.model";
import { CategoryModel } from "./../models/category.model";
import { HttpService } from './http.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { UserModel } from '../models/user.model';


@Injectable()
export class MainService {
  public onPageChange$: Subject<boolean>;
  public onLoginChange$: Subject<boolean>;


  constructor(private http: HttpService, private router: Router) {
    this.onPageChange$ = new Subject();
    this.onPageChange$.next(true);

    this.onLoginChange$ = new Subject();
    this.onLoginChange$.next(false);

    this.onLoginChange$.subscribe((login) => {
      console.log(`change login`, login);
      if (login) this.BaseInit();
    });
  }

  BaseInit() {
    this.http.BaseInitByToken(localStorage.getItem('token'));
  }

  getClient() {
    return this.http.GetData('/auth/client', '');
  }

  login(email: string, password: string) {
    let params = {
      email: email,
      password: password
    };
    return this.http.PostData('/auth', JSON.stringify(params));
  }

  googleLogin(token: any) {
    return this.http.PostData('/auth/google', JSON.stringify(token));
  }

  sendEmail(email: string) {
    let params = {
      email: email,
    };
    return this.http.PostData('/subscribe', JSON.stringify(params));
  }

  register(email: string, password: string) {
    let params = {
      email: email,
      password: password
    };
    return this.http.PostData('/users', JSON.stringify(params));
  }

  logout() {
    return this.http.PostData('auth/logout', '');
  }

  urlParams(params: any): string {
    let options = new URLSearchParams();

    for (let key in params) {
      let prop: any = params[key];
      if (prop) {
        if (prop instanceof Array) {
          for (let i in prop) {
            if (prop[i])
              options.append(key + "[]", prop[i]);
          }
        }
        else
          options.set(key, params[key]);
      }
    }
    return options.toString();
  }

  getBestRoutes(params?: any) {
    return  this.http.GetData('/routes/best', this.urlParams(params));
  }

  getRoute(id: number) {
    return this.http.GetData('/routes/' + id, '');
  }

  getBidirectionalRoute(latFrom: number, lngFrom: number, latTo: number, lngTo: number, categories: string[]) {
    let data = {
      from_lat: latFrom,
      from_lng: lngFrom,
      to_lat: latTo,
      to_lng: lngTo,
      categories: categories
    }
    return this.http.GetData('/routes/bidirectional/venues', this.urlParams(data));
  }

  getCityRoute(latFrom: number, lngFrom: number, categories: string[]) {
    let data = {
      lat: latFrom,
      lng: lngFrom,
      categories: categories
    }
    return this.http.GetData('/routes/internal/venues', this.urlParams(data));
  }

  getImage(id: string) {
    return this.http.GetData('/images/' + id, '');
  }

  getImageUrl(id: number){
    return this.http.serverUrl + '/images/' + id + '/pure';
  }

  likeRoute(route_id: number) {
    return this.http.PostData('/routes/' + route_id + '/likes', '');
  }

  repostRoute(route_id: number) {
    return this.http.PostData('/routes/repost/' + route_id, '');
  }

  likePlace(place_id: number) {
    return this.http.PostData('/places/' + place_id + '/likes', '');
  }

  public allCategories() {
    return [
      new CheckboxModel("Water", "water", "1.png"),
      new CheckboxModel("Mountains", "mountains", "2.png"),
      new CheckboxModel("Architecture", "architecture", "3.png"),
      new CheckboxModel("Churches", "rel_building", "4.png"),
      new CheckboxModel("Nature", "nature", "5.png"),
      new CheckboxModel("Monuments", "monument", "6.png")
    ];
  }


  public mapStyle() {
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