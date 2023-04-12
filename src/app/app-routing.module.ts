import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogingaurdGuard } from './logingaurd.guard';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'feature',component:FeaturesComponent,canActivate:[LogingaurdGuard]},
  {path:'pricing',component:PricingComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'home',component:HomeComponent, canActivate:[LogingaurdGuard] },
  {path:'admin',loadChildren:()=>import('./module/admin/admin.module').then((m)=>m.AdminModule)},
  {path:'**', pathMatch:'full', redirectTo:'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
}
