import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fakedata1Service {

  constructor(private fsObj:HttpClient) 
  { 

  }

  getProfiles():Observable<any>
  {
    return this.fsObj.get<any>("https://reqres.in/api/users?page=2");
  }

}
