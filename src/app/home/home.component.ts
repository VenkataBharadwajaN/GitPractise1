import { Component, OnInit } from '@angular/core';
import { TransferdataService } from '../transferdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  num=true;
  constructor(private transferData:TransferdataService) {

   }

  ngOnInit(): void 
  {
    this.transferData.setData(this.num);
  }

}
