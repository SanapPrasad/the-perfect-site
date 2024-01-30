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
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {
  ApiResponse: any;


  constructor(private http: HttpClient, private userservice: UserService, private dataService:DataService) { }

  public user: any;
  public experienceList: ExperienceModel[] = [];
  public educationList: EducationModel[] = [];
  public address : AddressModel |any;
  ngOnInit() {

      this.dataService.findUser$.subscribe(data=>{
        this.ApiResponse=data;
        this.educationList = this.ApiResponse.education;
        this.experienceList = this.ApiResponse.experience;
        this.address=this.ApiResponse.address;
      })
  }
  updateEducation(education: EducationModel) {
    alert(education.college)
  }
  deleteEducation(education: EducationModel) {
    alert(education.college)
  }

  updateExperience(experience: ExperienceModel) {
    alert(experience.companyName)
  }
  deleteExperience(experience: ExperienceModel) {
    alert(experience.companyName)
  }

  showUser() {
    this.user = this.userservice.getUserAllData();
    this.educationList = this.ApiResponse.education;
    this.experienceList = this.ApiResponse.experience;
    console.log(this.experienceList)
    console.log(this.educationList)
    console.log(this.ApiResponse.username, this.ApiResponse.password)
  }

  getUserAllData() {
    this.http.get<User>(`${baseUrl}/user/findUser`).subscribe(
      (data: User) => {
        console.log(data)
        this.educationList = data.education
        return data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
