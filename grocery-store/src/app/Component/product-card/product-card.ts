import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../data';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!:Product;
  @Input()count:number=0;
  @Output()add=new EventEmitter<number>();
  @Output()decrease=new EventEmitter<number>();

}
