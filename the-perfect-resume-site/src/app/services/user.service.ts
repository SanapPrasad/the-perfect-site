import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './server-service';
import { User } from '../objects/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  formData = {
    username: '',
    password: '',
    otp: ''
  }

  response = {
    message: '',
    statusCode: Number,
    status: ''
  }
  apiResponse:any; 
  public user=User;
  constructor(private http: HttpClient) { }
  getUser() {
    return this.http.get(`${baseUrl}/user/findUser`);
  }

  loginUser(formData:any){
    return this.http.post<any>(`${baseUrl}/user/login`,formData);
  }

  getUserAllData(){
    this.http.get<User>(`${baseUrl}/user/findUser`).subscribe(
      (data:User)=>{
        return data;
      },
     error=>{
      console.log(error);
     }
      
    )
  }

  verifyUserEmail(formData: any) {
    return this.http.post<any>(`${baseUrl}/user/sendOtp`, formData).subscribe(
      response => {
        if(response.statusCode=1001){
          console.log('This is responce:- ', response.message)

        }else{
          console.log('This is Failed:- ', response.status)
        }
      },
      error => {
        this.response = error
        console.log('This is error:- ', error)
      }
    )
  }

  verifyUserOtp(formData: any) {
    this.http.post<any>(`${baseUrl}/user/verifyOtp`, formData).subscribe(
      response => {
        console.log('This is responce:- ', response)
      },
      error => {
        console.log('This is error:- ', error)
      }
    )
  }


}