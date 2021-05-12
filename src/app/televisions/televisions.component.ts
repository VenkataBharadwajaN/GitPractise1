import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.modal';
import { TelevisionDataService } from '../television-data.service';
import { TransferdataService } from '../transferdata.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit{
  products:Product[]=[];
  constructor(private televisionObj:TelevisionDataService)
  {

  }
  ngOnInit()
  {
      this.products=this.televisionObj.getTelevisionData();
  }

  // num;
  // constructor(private transferData:TransferdataService)
  // {

  // }
  // ngOnInit()
  // {
  //   this.num=this.transferData.getData();  
  // }
  // products:Product[]=[

  //   {
  //   productTitle:"Tv-1",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
  //   },
  //   {
  //   productTitle:"Tv-2",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
  //   },
    
  //   {
  //   productTitle:"Tv-3",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },
    
  //   {
  //   productTitle:"Tv-4",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },

  //   {
  //     productTitle:"Tv-5",
  //     description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //     productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
  //   },
    
  //   {
  //     productTitle:"Tv-6",
  //     description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //     productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },    

  // ]



}
