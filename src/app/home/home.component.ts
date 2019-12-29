import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _ser: AllService,private _r:Router) { }
  users: any;
  ngOnInit() {
    this._r.events.subscribe(()=>{
      this._ser.getUsers().subscribe((res) => {
        this.users = res;
      })
    })
    this._ser.getUsers().subscribe((res) => {
      this.users = res;
    })
  }
  delete(id) {
    if (confirm("Are you sure to delete this record")) {
      this._ser.delete(id).subscribe((res) => {
        if (res['class'] == "success") {
          this._ser.getUsers().subscribe((res) => {
            this.users = res;
          })
        }
      })
    }
  }

}
