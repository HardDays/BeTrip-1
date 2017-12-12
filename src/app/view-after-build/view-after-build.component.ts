import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
@Component({
  selector: 'app-view-after-build',
  templateUrl: './view-after-build.component.html',
  styleUrls: ['./view-after-build.component.css']
})
export class ViewAfterBuildComponent implements OnInit {

  constructor(private service:MainService) { }
  lat: number = 51.678418;
  lng: number = 7.809007;
    ngOnInit() {
      this.service.onPageChange$.next(false);
    }

}
