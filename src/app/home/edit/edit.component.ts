import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { AllService } from '../../all.service'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _ar:ActivatedRoute,private _r:Router, private _ser:AllService,private _fb:FormBuilder) { }

  editGroup:FormGroup;

  ngOnInit() {
    this.editGroup = this._fb.group({
      id:[],
      name:[],
      email:[],
      mobile:[],
      password:[],
      status:[]
    })
    let id = this._ar.snapshot.params.id
     this._ser.getUser(id).subscribe((res)=>{
      this.editGroup.patchValue(res);
     })
    this._r.events.subscribe(()=>{
     let id = this._ar.snapshot.params.id
     this._ser.getUser(id).subscribe((res)=>{
      this.editGroup.patchValue(res);
     })
    })
  }
  editForm(data){
    this._ser.update(data).subscribe((res)=>{
      if(res['class']=='success'){
        this._r.navigate(['/home']);
      }
    })
  }

}
