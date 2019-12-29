import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginGroup = {
    email:"",
    password:""
  }
  ngOnInit() {
  }

  login(value){
    console.log("Login Form = ",value)
  }

}
