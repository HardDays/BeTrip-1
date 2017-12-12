import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  constructor(private service:MainService) { }

  lat: number = 51.678418;
  lng: number = 7.809007;
  
  ngOnInit() {
    this.service.onPageChange$.next(false);
  }

}
