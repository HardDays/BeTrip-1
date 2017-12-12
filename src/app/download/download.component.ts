import { Component, OnInit } from '@angular/core';
import { MainService} from '../core/services/main.service';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private service:MainService) { }
  
    ngOnInit() {
      this.service.onPageChange$.next(false);
    }

}
