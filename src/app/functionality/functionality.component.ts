import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { FooterComponent } from '../footer/footer.component';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-functionality',
  templateUrl: './functionality.component.html',
  styleUrls: ['./functionality.component.css']
})
export class FunctionalityComponent implements OnInit {

  constructor(private service:MainService) { }
  
    ngOnInit() {
      $(".content").addClass("all-pages");
      this.service.onPageChange$.next(false);
    }
}
