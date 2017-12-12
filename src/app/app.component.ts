import { Component } from '@angular/core';
import { MainService} from './core/services/main.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  page:string = 'none';
  isBuildPage:boolean = true;
  constructor(private service:MainService){

    this.page = location.pathname;
  
    if( this.page != '/build') this.isBuildPage = false;
      else this.isBuildPage = true;
  
    this.service.onPageChange$.subscribe(
      ()=>{
        this.page = location.pathname;
        if( this.page != '/build') this.isBuildPage = false;
          else this.isBuildPage = true;
      }
    );
  }
  OpenModalSignIn(){
    $("#login-modal").modal('show');
  }
  OpenModalSignUp(){
    $("#regist-modal").modal('show');
  }

 

}
