import { Component } from '@angular/core';
import { MainService} from './core/services/main.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from "angular2-social-login";

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
  isLogined:boolean = false;
  public LoginParams = {
    email:'',
    password: ''
  }
  public RegisterParams = {
    email:'',
    password: ''
  }
  constructor(private service:MainService,private router: Router,public _auth: AuthService){

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
  Navigate(){
    this.router.navigate(['/build'])
  }


  Login(){
    this.isLoginErr = false;
    this.service.UserLogin(this.LoginParams.email, this.LoginParams.password)
    .subscribe((res:boolean)=>{
      $("#login-modal").modal('hide');
      this.isLogined = true;
        },
        (err)=>{
            console.log(err);
            this.isLoginErr = true;
            
        }  
    );
}
Registration(){
  this.isLoginErr = false;
  console.log(this.RegisterParams.email, this.RegisterParams.password)
  this.service.UserRegistration(this.RegisterParams.email, this.RegisterParams.password)
  .subscribe((res:boolean)=>{
    $("#regist-modal").modal('hide');
    this.isLogined = true;
  },
      (err)=>{
          console.log(err);
          this.isLoginErr = true;
          
      }  
  );
}
signIn(provider){
  this._auth.login(provider).subscribe(
    (data) => {
                console.log(data);
                //user data 
                //name, image, uid, provider, uid, email, token (accessToken for Facebook & google, no token for linkedIn), idToken(only for google) 
              }
  )
}
}
