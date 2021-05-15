import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Fakedata1Service } from '../fakedata1.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit,OnDestroy {

  profiles:any=[];
  status:Subscription
  constructor(private fsObj:Fakedata1Service) 
  { }

  ngOnInit(): void 
  {
    this.status=this.fsObj.getProfiles().subscribe(
      info=>{
        this.profiles=info;
        // console.log("Helo");
      },
      err=>{
        console.log("Error is",err);
      }
    )
  }

  ngOnDestroy()
  {
    this.status.unsubscribe();
  }

}
