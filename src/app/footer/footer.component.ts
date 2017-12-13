import { Component, OnInit, ViewChild } from '@angular/core';

import {NgForm} from '@angular/forms';
import { Router } from "@angular/router";
import { MainService } from '../core/services/main.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private service:MainService) { }

  ngOnInit() {
  }
  @ViewChild('submitFormSubscribe') form: NgForm
  SubscribeEmail(form){
    console.log(form);

    this.service.SendEmail(form.control.controls.email.value).subscribe(
      (res)=>{
       
      }
    );

  }

}
