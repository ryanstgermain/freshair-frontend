import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { TripPageComponent } from './trip-page/trip-page.component';
import { SignupComponent } from './signup/signup.component'
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component'

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "homepage", component: UserHomepageComponent},
  {path: "trips", component: TripPageComponent},
  {path: "signup", component: SignupComponent}
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
