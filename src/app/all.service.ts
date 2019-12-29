import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private _http:HttpClient) { }

  register(data){
    return this._http.post('http://localhost/client_api_4/register.php',data).
    pipe(map((res)=>{
      return res;
    }))
  }

  getUsers(){
    return this._http.get('http://localhost/client_api_4/getUsers.php').
    pipe(map((res)=>{
      return res;
    }))
  }
  getUser(id){
    return this._http.get('http://localhost/client_api_4/getUser.php?id='+id).
    pipe(map((res)=>{
      return res;
    }))
  }

  delete(id){
    return this._http.post('http://localhost/client_api_4/delete.php',id).
    pipe(map((res)=>{
      return res;
    }))
  }

  update(data){
  return this._http.post('http://localhost/client_api_4/update.php',data).
    pipe(map((res)=>{
      return res;
    }))
  }
}
