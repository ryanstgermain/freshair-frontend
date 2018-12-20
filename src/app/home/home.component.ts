import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GetrequestserviceService } from '../getrequestservice.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm = new FormGroup({
    user_name: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private _GetrequestserviceService: GetrequestserviceService) { }

  onSubmit() {
    console.log(this.loginForm.value)
    this._GetrequestserviceService.getLogin(this.loginForm.value.user_name, this.loginForm.value.password)
  }

  ngOnInit() {
  }

}
