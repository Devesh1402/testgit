import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './componants/header/header.component';
import { FooterComponent } from './componants/footer/footer.component';
import { AdmindashboardComponent } from './componants/admindashboard/admindashboard.component';
import { ContactComponent } from './componants/contact/contact.component';
import { AboutComponent } from './componants/about/about.component';
import { HomeComponent } from './componants/home/home.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdmindashboardComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
