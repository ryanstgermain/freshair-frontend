import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripCreationComponent } from './trip-creation/trip-creation.component';
import { TripPageComponent } from './trip-page/trip-page.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    TripCreationComponent,
    TripPageComponent,
    UserHomepageComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
