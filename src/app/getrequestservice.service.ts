import { TripData } from './trip-page/tripdata'
// import { UserData } from './home/userdata'
import { SignupData} from './signup/signupdata'
import { HomeData } from './user-homepage/homedata'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class GetrequestserviceService {

  user: Object

  constructor(private http:HttpClient) { }

  getData(): Observable <TripData[]> {
    return this.http.get<TripData[]>('https://freshairide.herokuapp.com/trips')
  }

  getLogin(user_name, password){
    this.http.get('https://freshairide.herokuapp.com/users/login',{
      headers: {
        user_name: user_name,
        password: password
      }
    }).subscribe(data =>
      this.user = data
    )
  }

  signup(form){
    this.http.post('https://freshairide.herokuapp.com/users/signup', 
    {
      "user_name": form.user_name,
      "password": form.password,
      "first_name": form.first_name,
      "last_name": form.last_name,
      "age": form.age
    }).subscribe(data =>
      this.user = data
    )
  }

  getHome(): Observable <HomeData[]> {
    return this.http.get<HomeData[]>('https://freshairide.herokuapp.com/users/home')
  }
}
