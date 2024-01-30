import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AddressModel } from 'src/app/objects/AddressModel';
import { EducationModel } from 'src/app/objects/EducationModel';
import { ExperienceModel } from 'src/app/objects/ExperienceModel';
import { DataService } from 'src/app/services/data-service/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  ApiResponse: any;


  constructor(private http: HttpClient, private userservice: UserService, private dataService:DataService) { }

  public user: any;
  public experienceList: ExperienceModel[] = [];
  public educationList: EducationModel[] = [];
  public address : AddressModel |any;
  ngOnInit() {

      this.dataService.findUser$.subscribe(data=>{
        this.ApiResponse=data;
        this.address=this.ApiResponse.address;
      })
  }
 
  updateAddress(address: AddressModel) {
    alert(address.city)
  }
}
