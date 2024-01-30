import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import baseUrl from '../server-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  ngOnInit(){}
  private findUser= this.http.get(`${baseUrl}/user/findUser`)
  findUser$=this.findUser;

  isLoggedIn: boolean=false
  SigninAndLogout='Signin'




}
