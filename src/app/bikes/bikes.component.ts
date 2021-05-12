import { Component, OnInit } from '@angular/core';
import { BikeDataService } from '../bike-data.service';
import { Product } from '../models/product.modal';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  products:Product[]=[];
  constructor(private bikeObject:BikeDataService)
  {

  }
  ngOnInit()
  {
    this.products=this.bikeObject.getBikesData();
  }
  // products:Product[]=[

  //   {
  //   productTitle:"Bike-1",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
  //   },
  //   {
  //   productTitle:"Bike-2",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
  //   },
    
  //   {
  //   productTitle:"Bike-3",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },
    
  //   {
  //   productTitle:"Bike-4",
  //   description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //   productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },

  //   {
  //     productTitle:"Bike-5",
  //     description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //     productImage:"https://apicms.thestar.com.my/uploads/images/2020/08/24/831125.jpg"
  //   },
    
  //   {
  //     productTitle:"Bike-6",
  //     description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
  //     productImage:"https://itconsultingindubai.files.wordpress.com/2016/03/choosing-a-technology-solution.jpg"
  //   },    

  // ]

}
