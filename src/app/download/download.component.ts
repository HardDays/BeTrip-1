import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { FooterComponent } from '../footer/footer.component';
import { NgForm } from '@angular/forms';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private service:MainService) { }
  sendedEmail = false;
  @ViewChild('submitFormSubscribe') form: NgForm
  SubscribeEmail(form){
    console.log(form);

    this.service.sendEmail(form.control.controls.email.value).subscribe(
      (res)=>{
        this.sendedEmail = true;
        
      }
    );

  }
    ngOnInit() {
      $(".content").addClass("all-pages");
      this.service.onPageChange$.next(false);
    }

}
