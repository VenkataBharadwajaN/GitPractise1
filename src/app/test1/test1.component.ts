import { Component, OnInit } from '@angular/core';
import { Fakedata1Service } from '../fakedata1.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  profiles:any=[];
  constructor(private fsObj:Fakedata1Service) 
  { }

  ngOnInit(): void 
  {
    this.fsObj.getProfiles().subscribe(
      info=>{
        this.profiles=info;
        console.log("Helo");
      },
      err=>{
        console.log("Error is",err);
      }
    )
  }

}
