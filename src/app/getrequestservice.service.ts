import { TripData } from './trip-page/tripdata'
import { UserData } from './home/userdata'
import { SignupData} from './signup/signupdata'
import { HomeData } from './user-homepage/homedata'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class GetrequestserviceService {

  constructor(private http:HttpClient) { }

  getData(): Observable <TripData[]> {
    return this.http.get<TripData[]>('https://freshairide.herokuapp.com/trips')
  }

  getLogin(): Observable <UserData[]> {
    return this.http.get<UserData[]>('https://freshairide.herokuapp.com/users/login')
  }

  signup(form): Observable <SignupData[]> {
    return this.http.post<SignupData[]>('https://freshairide.herokuapp.com/users/signup', 
    {
      "user_name": form.user_name,
      "password": form.password,
      "first_name": form.first_name,
      "last_name": form.last_name,
      "age": form.age
    })
  }

  getHome(): Observable <HomeData[]> {
    return this.http.get<HomeData[]>('https://freshairide.herokuapp.com/users/home')
  }
}
