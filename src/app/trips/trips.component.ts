import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  constructor(private service:MainService) { }

  ngOnInit() {
    this.service.onPageChange$.next(false);
  }

}
