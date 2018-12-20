import { Component, OnInit } from '@angular/core';
import { GetrequestserviceService } from '../getrequestservice.service'

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit{

  trips:Object

  constructor(private _GetrequestserviceService: GetrequestserviceService) { }
    
  ngOnInit() {
    
    this._GetrequestserviceService.getData().subscribe( info => {
      this.trips = info
      console.log(this.trips)
    })
  }
}


