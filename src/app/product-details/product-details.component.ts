import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.modal';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() productObj:Product
  @Output() myEvent=new EventEmitter();
  sendProductDetailsToParent(productTitle)
  {
    this.myEvent.emit(productTitle);
  }
}
