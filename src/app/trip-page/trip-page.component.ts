import { Component, OnInit } from '@angular/core';
import { GetrequestserviceService } from '../getrequestservice.service'
// import { TripData } from './tripdata'
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface TripData {
  id: number;
  date: string;
  seats_available: number;
  seat_price: string;
  start_time: string;
  end_time: string;
  location_id: number;
}

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit{

  constructor(private _GetrequestserviceService: GetrequestserviceService) { }
    
  ngOnInit() {
    
    this._GetrequestserviceService.getData().subscribe( info => {
      console.log(info)
    })
  }
}


