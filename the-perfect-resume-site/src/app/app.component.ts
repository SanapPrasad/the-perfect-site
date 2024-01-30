import { Component } from '@angular/core';
import { DataService } from './services/data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService:DataService){}
  title = 'the-perfect-resume-site';
  isLoggedIn=this.dataService.isLoggedIn
}
