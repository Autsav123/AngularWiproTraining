import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../data';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  @Input()products:Product[]=[];
  @Input()cart:{[id:number]:number}={};
  @Output()add=new EventEmitter<number>();
    @Output()decrease=new EventEmitter<number>();

}
