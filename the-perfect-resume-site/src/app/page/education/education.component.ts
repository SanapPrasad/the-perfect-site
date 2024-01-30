import { Component } from '@angular/core';
import { AddressModel } from 'src/app/objects/AddressModel';
import { EducationModel } from 'src/app/objects/EducationModel';
import { ExperienceModel } from 'src/app/objects/ExperienceModel';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  ApiResponse: any;
  formData:any;
  firstNameError=''
  readonly="true"
  constructor( private dataService:DataService) { }

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

}
