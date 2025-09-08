import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../data';
@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  @Input()items:(Product & {quantity:number})[]=[];
  @Output()remove =new EventEmitter<number>();
    @Output()decrease =new EventEmitter<number>();

}
