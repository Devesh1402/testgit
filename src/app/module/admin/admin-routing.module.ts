import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { HomeComponent } from './componants/home/home.component';localStorage
import { AdmindashboardComponent } from './componants/admindashboard/admindashboard.component';
import { ContactComponent } from './componants/contact/contact.component';

const routes: Routes = [
  {path:'',component:AdmindashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
