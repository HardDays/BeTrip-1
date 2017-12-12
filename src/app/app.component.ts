import { Component } from '@angular/core';
import { MainService} from './core/services/main.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  page:string = 'none'
  isBuildPage:boolean = true;
  constructor(private service:MainService){

    this.page = location.pathname;
    console.log(location.pathname);
    if( this.page != '/build') this.isBuildPage = false;
      else this.isBuildPage = true;
  
    this.service.onPageChange$.subscribe(
      ()=>{
        console.log(`PATH CHANGE`);
        this.page = location.pathname;
        console.log(location.pathname);
        if( this.page != '/build') this.isBuildPage = false;
          else this.isBuildPage = true;
      }
    );
  }
}
