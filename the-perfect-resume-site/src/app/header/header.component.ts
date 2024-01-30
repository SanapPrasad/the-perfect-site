import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data-service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private userservice: UserService, private dataService: DataService) { }
  name = 'ThePerfectResume';
  SigninAndLogout= this.dataService.SigninAndLogout
  firstName='';
  lastName='';
  ApiResponse: any;
  ngOnInit() {

    this.dataService.findUser$.subscribe(data => {
      this.ApiResponse = data;
      this.firstName =this.ApiResponse.firstname
      this.lastName=this.ApiResponse.lastname
      if(this.firstName!=null && this.firstName != "NULL")
        this.name=this.firstName
      if(this.lastName!=null && this.lastName != "NULL")
        this.name=this.firstName + this.lastName
      console.log(this.name)
    })

   
  }
 
 }

