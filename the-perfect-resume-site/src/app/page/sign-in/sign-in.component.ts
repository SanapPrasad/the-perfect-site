import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AppConstants } from 'src/app/objects/AppConstants';
import { DataService } from 'src/app/services/data-service/data.service';
import baseUrl from 'src/app/services/server-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private router:Router,private http:HttpClient,private dataService:DataService){}
  appConstant=AppConstants;
  formData={
    username:'',
    password:''
  }

  userData={
    user:{
      username:'',
      password:''
    }
  }

  onSubmit(formData:any){
    if( formData.username==''){
      alert("Username is required")
      return
    }
    if(formData.password=='' ){
      alert("Password is required")
      return
    }
    this.userData.user.username = this.formData.username
    this.userData.user.password = this.formData.password
    return this.http.post<any>(`${baseUrl}/user/login`, this.userData).subscribe(
      response => {
        console.log(response)
        if (response.statusCode == this.appConstant.SUCCESS_CODE) {
          alert(response.message)
          this.router.navigate(['home'])
          this.dataService.isLoggedIn=true;
          this.dataService.SigninAndLogout="Logout";
        } else if (response.statusCode == this.appConstant.FAILED_CODE) {
          alert(response.message)
        }
      },
      error => {
        console.log('This is error:- ', error)
      }
    )

    
  }
  hide=false;
  goToPage(pageName:any){
    this.router.navigate([`${pageName}`]);
    return;
  }
}
