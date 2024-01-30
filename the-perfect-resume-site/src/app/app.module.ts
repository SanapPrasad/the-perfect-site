import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { MatStepperModule} from '@angular/material/stepper';
import { SingupComponent } from './page/singup/singup.component';
import {HttpClientModule} from '@angular/common/http';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginHomeComponent } from './page/login-home/login-home.component';
import { EducationComponent } from './page/education/education.component';
import { ExperienceComponent } from './page/experience/experience.component';
import { AddressComponent } from './page/address/address.component';
import { BasicHeaderComponent } from './basic-header/basic-header.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SingupComponent,
    SignInComponent,
    ForgetPasswordComponent,
    LoginHomeComponent,
    EducationComponent,
    ExperienceComponent,
    AddressComponent,
    BasicHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
