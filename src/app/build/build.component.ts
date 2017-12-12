import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  constructor(private service:MainService) { }
  
    ngOnInit() {
      this.service.onPageChange$.next(false);
    }

}
