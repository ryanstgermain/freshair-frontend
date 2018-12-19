import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user:Object


  constructor(private http:HttpClient) { }

  login(user_name, password){
    return this.http.get('https://freshairide.herokuapp.com/' + path)
  }

}
