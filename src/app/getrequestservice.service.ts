import { TripData } from './trip-page/tripdata'
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
}
