import { Component, OnInit } from '@angular/core';
import { GetrequestserviceService } from '../getrequestservice.service'

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit{

  startTime:Object
  endTime:Object
  seatAvail:Object
  seatPrice:Object

  constructor(private _GetrequestserviceService: GetrequestserviceService) { }
    
  ngOnInit() {
    
    this._GetrequestserviceService.getData().subscribe( info => {
      this.startTime = info[0].start_time
      this.endTime = info[0].end_time
      console.log(this.endTime)
    })
  }
}


