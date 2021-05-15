import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Post } from './models/posts.model';
@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor(private hcObj:HttpClient) {

   }
   getPosts():Observable<Post[]>
   {
     return this.hcObj.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
   }

   getUsers():Observable<any>
   {
     return this.hcObj.get<any>("https://reqres.in/api/users?page=2");
   }
}
