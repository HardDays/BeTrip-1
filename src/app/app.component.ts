import { Component, ViewChild } from '@angular/core';
import { MainService} from './core/services/main.service';
import {NgForm, FormControl} from '@angular/forms';
import { Router } from "@angular/router";
import { AuthService } from 'angular2-social-login';
import { PreloaderComponent } from './preloader/preloader.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Base64ImageModel } from './core/models/base64image.model';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  public user;
  sub: any;
  page:string = 'none';
  clientStatus:string = 'none';
  isShow:boolean = false;
  canShow:boolean = false;
  isBuildPage:boolean = true;
  isLoginErr = false;
  isLogined = false;
  image:any;
  userName:string = '';
  email:string = '';
  date:any = '';
  Load:boolean = true;

  @ViewChild('submitFormUsr') form: NgForm;

  public LoginParams = {
    email:'',
    password: ''
  }
  public RegisterParams = {
    email:'',
    password: ''
  }
  constructor(private service:MainService,private router: Router, public _auth: AuthService){

    this.service.GetClient().
    subscribe((status)=>{
      this.clientStatus = status.result;
      this.canShow = true;
      this.Load = false;
      console.log(`client status: `,this.clientStatus);

     // this.clientStatus="web2";
      if(this.clientStatus=="web"){
          this.isShow = true;
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

          
      
          if(localStorage.getItem('token')) {
            this.isLogined = true;
            this.service.BaseInit();
          }
      
          this.service.onLoginChange$.subscribe(()=>{
            this.isLogined =!this.isLogined;
          });
    }
    

    });

  }

  
  OpenModalSignIn(){
    $("#login-modal").modal('show');
  }
  OpenModalSignUp(){
    $("#regist-modal").modal('show');
  }

  OpenModalProfile(e:any){
    e.preventDefault();
    $("body").addClass("has-active-menu");
    $(".mainWrapper").addClass("has-push-left");
    $(".nav-holder-3").addClass("is-active");
    $(".mask-nav-3").addClass("is-active");
    


}

closeModal(e:any){
  e.preventDefault();
  $("body").removeClass("has-active-menu");
  $(".mainWrapper").removeClass("has-push-left");
  $(".nav-holder-3").removeClass("is-active");
  $(".mask-nav-3").removeClass("is-active")
}

ngOnInit() 
{
    this.service.GetMe()
      .subscribe((res)=>{
            console.log("1111");
            console.log(res);
            this.InitByUser(res);
            this.isLogined = true;
      },
      (err)=>{
          console.log(err);
          
      }  
  );
    
}
change(e) {
  console.log("rabotaet");
  console.log(e);
}

InitByUser(res:any){
  //if(this.image){
    this.service.GetImage(res.cover_id)
        .subscribe((res:Base64ImageModel)=>{
            console.log("image");
            console.log(res);
            this.image = res.base64;
        });
 // }
  this.userName = res.first_name?res.first_name:'';
  this.email = res.email?res.email:'';
  this.date = res.date_of_birth?res.date_of_birth:'';

}

UpdateUser(){
  console.log(this.form);
  this.service.UpdateMe(this.form.form.value.userName, this.form.form.value.email, this.form.form.value.date)
    .subscribe((res)=>{
      this.service.UploadPhoto(this.image)
      .subscribe((res)=>{
        console.log("otpravili");
        console.log(res);
        this.InitByUser(res);
      },
      (err)=>{
        console.log(err);
        this.isLoginErr = true;
        
      } 
    ); 
  },
  (err)=>{
    console.log(err);
    this.isLoginErr = true;
    
  }  
  );
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

  console.log(`1`,provider);
  this.sub = this._auth.login(provider).subscribe(
    (data) => {
      console.log(data);
      console.log(data);
      this.user=data;
    if(provider=='google')
        this.service.GoogleLogin(this.user.token);
        localStorage.setItem('token',this.user.token);
        this.service.onLoginChange$.next(true);
        this.isLogined = true;
        $("#login-modal").modal('hide');
    }
  )
  
}

logout(){
  this._auth.logout().subscribe(
    (data)=>{console.log(data);this.user=null;}
  )
}
changeListener($event: any) : void {
  this.readThis($event.target);
}

readThis(inputValue: any): void {
  for(let f of inputValue.files){
      let file:File = f;
      if(!file) return;
      let myReader:FileReader = new FileReader();
      myReader.onloadend = (e) => {
              this.image = myReader.result;
      }
      myReader.readAsDataURL(file);
  }
}

Navigate(){
  this.router.navigate(['/build']);
}
}



