import { Component } from '@angular/core';
import { MainService} from './core/services/main.service';
import {NgForm} from '@angular/forms';

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
  isLoginErr = false;
  public LoginParams = {
    email:'',
    password: ''
  }
  public RegisterParams = {
    email:'',
    password: ''
  }
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

  Login(){
    this.isLoginErr = false;
    this.service.UserLogin(this.LoginParams.email, this.LoginParams.password)
    .subscribe((res:boolean)=>{
        (err)=>{
            console.log(err);
            this.isLoginErr = true;
            
        }  
    });
}
Registration(){
  this.isLoginErr = false;
  console.log(this.RegisterParams.email, this.RegisterParams.password)
  this.service.UserRegistration(this.RegisterParams.email, this.RegisterParams.password)
  .subscribe((res:boolean)=>{
      (err)=>{
          console.log(err);
          this.isLoginErr = true;
          
      }  
  });
}
signIn(provider){
  //this.sub = this._auth.login(provider).subscribe(
    (data) => {
                console.log(data);
                //user data 
                //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
              }
 // )
}
}
