import { Component, OnInit } from '@angular/core';
import { GetrequestserviceService } from '../getrequestservice.service'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

}
