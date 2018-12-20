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
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    age: new FormControl(''),
    user_name: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private _GetrequestserviceService: GetrequestserviceService) { }

  onSubmit(){
    console.log(this.signupForm.value)
    this._GetrequestserviceService.signup(this.signupForm.value)
  }

  ngOnInit() {
  }

}
