import { Component } from '@angular/core';
import { MainService} from './core/services/main.service';
import {NgForm} from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from 'angular2-social-login';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public user;
  sub: any;
  page:string = 'none';
  isBuildPage:boolean = true;
  isLoginErr = false;
  isLogined = false;

  public LoginParams = {
    email:'',
    password: ''
  }
  public RegisterParams = {
    email:'',
    password: ''
  }
  constructor(private service:MainService,private router: Router, public _auth: AuthService){

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

    if(localStorage.getItem('token')) this.isLogined = true;

    this.service.onLoginChange$.subscribe(()=>{
      this.isLogined =!this.isLogined;
    });
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
    .subscribe((res)=>{
      localStorage.setItem('token',res.token);
      this.service.onLoginChange$.next(true);
      this.isLogined = true;
      $("#login-modal").modal('hide');
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
  .subscribe((res)=>{
    localStorage.setItem('token',res.token);
    $("#regist-modal").modal('hide');
  },
      (err)=>{
          console.log(err);
          this.isLoginErr = true;
          
      }  
  );
}
Logout(){
  this.isLoginErr = false;
  console.log(this.RegisterParams.email, this.RegisterParams.password)
  this.service.UserLogout();
  
    console.log(`logout`);
    localStorage.removeItem('token');
    this.service.onLoginChange$.next(false);
    this.isLogined = false;
    
  
}
signIn(provider){
  this.sub = this._auth.login(provider).subscribe(
    (data) => {
      console.log(data);this.user=data;}
  )
  
}

logout(){
  this._auth.logout().subscribe(
    (data)=>{console.log(data);this.user=null;}
  )
}

Navigate(){
  this.router.navigate(['/build']);
}
}
