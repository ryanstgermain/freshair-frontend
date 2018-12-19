import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripPageComponent } from './trip-page/trip-page.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { SignupComponent } from './signup/signup.component';
=======
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
>>>>>>> 15d1d4cbca90b8833cc0374de700c2338018561d


@NgModule({
  declarations: [
    AppComponent,
    TripPageComponent,
    UserHomepageComponent,
    HomeComponent,
<<<<<<< HEAD
    SignupComponent
=======
    FooterComponent,
    NavComponent
>>>>>>> 15d1d4cbca90b8833cc0374de700c2338018561d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
