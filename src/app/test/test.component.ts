import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakedataService } from '../fakedata.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  mySubscription:any;
  posts=[]
  constructor(private fsObj:FakedataService) {

   }
  users:any;

  ngOnInit(): void 
  {
    this.fsObj.getPosts().subscribe(data=>{
      this.posts=data;
    },
    err=>{
      console.log("Error is ",err)
    });
  }

  // ngOnInit(): void 
  // {
  //   this.mySubscription=this.fsObj.getUsers().subscribe(
  //     data=>{
  //     this.users=data;
  //   },
  //   err=>{
  //     console.log("Error is ",err)
  //   });
  // }

  // ngOnDestroy()
  // {
  //   this.mySubscription.unsubscribe();
  // }

}
