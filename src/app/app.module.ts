import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { CustomBtnComponent } from './common/custom-btn/custom-btn.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogingaurdGuard } from './logingaurd.guard';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    BehaviorSubjectComponent,
    CustomBtnComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    PricingComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LogingaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
