import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  // {path:'',pathMatch:'full'},
  // {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'',component:MainComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component: DashboardComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
