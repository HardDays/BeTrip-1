import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService} from '../core/services/main.service';
import {NgForm} from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild('submitFormCwrc') form: NgForm
  SubscribeEmail(){
    console.log(this.form);
  }

}
