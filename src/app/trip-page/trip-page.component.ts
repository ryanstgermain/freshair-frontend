import { Component, OnInit } from '@angular/core';
import { GetrequestserviceService } from '../getrequestservice.service'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.scss']
})
export class TripPageComponent implements OnInit{

  tripForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
    location: new FormControl('')
  })

  trips:Object

  constructor(private _GetrequestserviceService: GetrequestserviceService) { }
    
  ngOnInit() {
    
    this._GetrequestserviceService.getData().subscribe( info => {
      this.trips = info
      console.log(this.trips)
    })
  }
}


