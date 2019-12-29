import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AllService} from '../all.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private _fb:FormBuilder,private _ser:AllService,private _r:Router) { }
  regGroup: FormGroup;
  ngOnInit() {
    // let name = new FormControl()
    this.regGroup = this._fb.group({
      name:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
      email:['',[Validators.required,
        Validators.pattern("[a-zA-Z0-9]{2,}[@]{1}[a-zA-Z0-9]{2,}[.]{1}[a-zA-Z]{2,}")]],
      password:['',[Validators.required]]
    })
    //console.log("Form => ",this.regGroup)
  }
  register(value){
    this._ser.register(value).subscribe((res)=>{
      console.log(res);
      if(res['class']=='success'){
        this._r.navigate(['/home'])
      }
    })
  }
}
