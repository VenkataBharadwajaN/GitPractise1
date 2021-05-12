import { Component, OnInit } from '@angular/core';
import { TransferdataService } from '../transferdata.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  value;
  constructor(private transferData:TransferdataService) 
  {
  }

  ngOnInit(): void 
  {
    this.value=this.transferData.getData();
  }

}
