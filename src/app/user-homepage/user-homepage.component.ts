import { Component, OnInit } from '@angular/core';
import { GetrequestserviceService } from '../getrequestservice.service'

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.scss']
})
export class UserHomepageComponent implements OnInit {

  home: Object

  constructor(private _GetrequestserviceService: GetrequestserviceService) { }

  ngOnInit() {
    this._GetrequestserviceService.getHome().subscribe( info => {
      this.home = info
      console.log(this.home)
    })
  }

}
