import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.modal';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit{

  products:Product[]=[];
  constructor(private dsObj:DataService)
    {
    }

    ngOnInit()
  {
      this.products=this.dsObj.getMobilesdata();

  }

  // products:Product[]=[

  //   {
  //   productTitle:"Mobile-1",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
  //   },
  //   {
  //   productTitle:"Mobile-2",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
  //   },
    
  //   {
  //   productTitle:"Mobile-3",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },
    
  //   {
  //   productTitle:"Mobile-4",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },

  //   {
  //     productTitle:"Mobile-5",
  //     description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //     productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
  //   },
    
  //   {
  //     productTitle:"Mobile-6",
  //     description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //     productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },    

  // ]

    

}
