import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { RegisterComponent } from '../app/register/register.component'
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './home/view/view.component';
import { EditComponent } from './home/edit/edit.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent,children:[
    {path:"view/:id",component:ViewComponent},
    {path:"edit/:id",component:EditComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
