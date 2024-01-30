import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/objects/AppConstants';
import baseUrl from 'src/app/services/server-service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  login_page=AppConstants.LOGIN_PAGE;

  appConstant = AppConstants;
  constructor(private router: Router, private http: HttpClient) { }
  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  formData = {
    username: '',
    password: '',
    cpassword: ''
  }

  userData = {
    user: {
      username: '',
      password: '',
    }
  }
  hide=true;
  emailError = ''
  passwordError = ''
  onSubmit(formData: any) {


    if (this.emailRegex.test(this.formData.username)) {

      if (formData.password == '' || formData.cpassword == '') {
        this.passwordError=this.appConstant.PASSWORD_ERROR
        return;
      }
      if (formData.password.length < 8 || formData.cpassword.length < 8) {
        this.passwordError=this.appConstant.PASSWORD_LENGTH_ERROR
        return;
      }
      if (formData.password != formData.cpassword) {
        this.passwordError=this.appConstant.PASSWORD_SAME_ERROR
        return;
      }
      this.userData.user.username = this.formData.username
      this.userData.user.password = this.formData.password
      return this.http.post<any>(`${baseUrl}/user/forget`, this.userData).subscribe(
        response => {
          console.log(response)
          if (response.statusCode == this.appConstant.UPDATED_CODE) {
            alert(response.message)
            this.router.navigate(['login'])
          } else if (response.statusCode == this.appConstant.FAILED_CODE) {
            alert(response.message)
          }
        },
        error => {
          console.log('This is error:- ', error)
        }
      )
    } else {
      console.log(this.appConstant.EMAIL_ERROR);
      this.emailError = this.appConstant.EMAIL_ERROR
      return
    }
  }


  goToPage(pageName: any) {
    this.router.navigate([`${pageName}`]);
    return;

  }
}
