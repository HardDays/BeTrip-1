import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private service:MainService) { }
  
    ngOnInit() {
      this.service.onPageChange$.next(false);
    }

}
