import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {

  constructor(private service:MainService) { }
  
    ngOnInit() {
      this.service.onPageChange$.next(false);
    }

}
