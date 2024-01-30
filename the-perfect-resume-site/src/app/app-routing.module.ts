import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SingupComponent } from './page/singup/singup.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import { LoginHomeComponent } from './page/login-home/login-home.component';
import { EducationComponent } from './page/education/education.component';
import { ExperienceComponent } from './page/experience/experience.component';
import { AddressComponent } from './page/address/address.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  
  {
    path:'home',
    component:LoginHomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SingupComponent,
    pathMatch:'full'
  },
  {
    path:'signin',
    component:SignInComponent,
    pathMatch:'full'
  },
  {
    path:'forget',
    component:ForgetPasswordComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginHomeComponent,
    pathMatch:'full'
  },
  {
    path:'education',
    component:EducationComponent,
    pathMatch:'full'
  },
  {
    path:'experience',
    component:ExperienceComponent,
    pathMatch:'full'
  }
  ,
  {
    path:'address',
    component:AddressComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
