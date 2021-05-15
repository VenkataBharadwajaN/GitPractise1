import { Injectable } from '@angular/core';
import { Product } from './models/product.modal';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) 
  { 
    
  }

  getMobilesdata():Observable<Product[]>
  {
    // return this.products;
    return this.hc.get<Product[]>("assets/mobiles.json")
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
