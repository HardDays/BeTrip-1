import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.css']
})
export class BestComponent implements OnInit {

  constructor(private service:MainService) { }
  lat: number = 51.678418;
  lng: number = 7.809007;
    ngOnInit() {
      this.service.onPageChange$.next(false);
    }

}
