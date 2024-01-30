import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddressModel } from 'src/app/objects/AddressModel';
import { EducationModel } from 'src/app/objects/EducationModel';
import { ExperienceModel } from 'src/app/objects/ExperienceModel';
import { User } from 'src/app/objects/User';
import { DataService } from 'src/app/services/data-service/data.service';
import baseUrl from 'src/app/services/server-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ApiResponse: any;


  constructor(private http: HttpClient, private userservice: UserService, private dataService:DataService) { }

  public user: any;
  public experienceList: ExperienceModel[] = [];
  public educationList: EducationModel[] = [];
  public address : AddressModel |any;
  ngOnInit() {
    this.dataService.isLoggedIn=false
  }

  
}
