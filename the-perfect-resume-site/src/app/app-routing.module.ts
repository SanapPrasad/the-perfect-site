import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './page/experience/experience.component';
import { HomeComponent } from './page/home/home.component';
import { SingupComponent } from './page/singup/singup.component';

const routes: Routes = [
  {
    path:"experience",
    component:ExperienceComponent,
    pathMatch:"full"
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SingupComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
