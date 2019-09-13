import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TheaterComponent } from './component/theater/theater.component';

const routes: Routes = [
{
  path:'',redirectTo:'/login',pathMatch:'full'
},
{
  path:'login',component:LoginComponent
},
{
  path:'dashboard',component:DashboardComponent
},
{
  path:'theater',component:TheaterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
