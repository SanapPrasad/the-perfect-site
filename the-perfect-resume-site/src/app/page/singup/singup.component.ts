import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/objects/AppConstants';
import { User } from 'src/app/objects/User';
import baseUrl from 'src/app/services/server-service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  constructor(private userservice: UserService, private http: HttpClient, private router: Router) { }

  login_page = AppConstants.LOGIN_PAGE;
  space = " "
  formData = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    otp: '',
    cpassword: ''
  }

  userData = {
    user: {
      username: '',
      password: '',
    }
  }
  response = {
    message: '',
    statusCode: Number,
    status: ''
  }
  hide = false;
  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  emailError = ''
  firstNameError =''
  lastNameError = ''
  otpError=''
  submitButton = true
  vOtpButton = true
  sOtpButton = false
  VerifyEmail = "Verify Email"
  readonly=false
  readonlyOtp=true
  // verifyUserEmail(formData: any) {
  //   let response = this.userservice.verifyUserEmail(formData)
  // }

  verifyUserEmail(formData: any) {

    if(this.formData.firstname.length<2){
      this.firstNameError=AppConstants.FIRST_NAME_ERROR
      return
    }
    if(this.formData.lastname.length<2){
      this.lastNameError=AppConstants.LAST_NAME_ERROR
      return
    }

    if (this.emailRegex.test(this.formData.username)) {
      return this.http.post<any>(`${baseUrl}/user/sendOtp`, formData).subscribe(
        response => {
          if (response.statusCode = AppConstants.SUCCESS_CODE) {
            this.vOtpButton = false
            this.sOtpButton = true
            this.readonly=true
            this.readonlyOtp=false
            console.log('This is responce:- ', response.status)
            this.emailError=response.message

          } else {
            console.log('This is Failed:- ', response.status)
          }
        },
        error => {
          this.response = error
          console.log('This is error:- ', error)
        }
      )
    } else {
      this.emailError = AppConstants.EMAIL_ERROR
      return
    }
  }

  verifyUserOtp(formData: any) {
    if(formData.otp.length<1){
      this.otpError="PLEASE ENTER OTP."
      return
    }
    if(formData.otp.length<6){
      this.otpError="PLEASE ENTER 6 DIGIT OTP."
      return
    }
    this.http.post<any>(`${baseUrl}/user/verifyOtp`, formData).subscribe(
      response => {
        if (response.statusCode = 1001) {

          if(response.status==AppConstants.FAILED){
            this.VerifyEmail='Generate OTP'
            this.vOtpButton = false
            this.sOtpButton = false
            this.otpError=response.message
            return
          }
          this.vOtpButton = true
          this.sOtpButton = true
          this.otpError=response.message
          this.submitButton = false
          this.readonlyOtp=true

        } else {
          console.log('This is Failed:- ', response.status)
        }
      },
      error => {
        console.log('This is error:- ', error)
      }
    )
  }

  onSubmit(formData: any) {
    if (formData.password == formData.cpassword && formData.password != '' && formData.cpassword != '') {
      this.userData.user.username = this.formData.username
      this.userData.user.password = this.formData.password
      this.http.post<any>(`${baseUrl}/user/create`, this.userData).subscribe(
        response => {
          if (response.statusCode = AppConstants.SUCCESS_CODE) {
            this.vOtpButton = true
            this.sOtpButton = true
            this.submitButton = false
            this.router.navigate(['home'])
            console.log('This is responce:- ', response.status)
          } else {
            console.log('This is Failed:- ', response.status)
          }
        },
        error => {
          console.log('This is error:- ', error)
        }
      )
    } else {
      console.log("Password does not matched")
    }
  }

  goToPage(pageName: any) {
    this.router.navigate([`${pageName}`]);
    return;
  }

}
