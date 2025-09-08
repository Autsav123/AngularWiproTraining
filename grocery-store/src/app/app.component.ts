

import { Component } from '@angular/core';
import { Productservice } from './services/productservice';
import { Cartservice } from './services/cartservice';
import { Product } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:false,
})
export class AppComponent {
  title='grocery-store';
  page: string = 'home';
  products: Product[] = [];
  cart: { [id: number]: number } = {};

  constructor(
    private productService: Productservice,
    private cartService: Cartservice
  ) {
    // Cart data subscription: har update pe cart update ho jayega
    this.cartService.cart$.subscribe((data: { [id: number]: number; }) => this.cart = data);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  // Navigation, on navbar click
  goTo(page: string) {
    this.page = page;
    if (page === 'Fruits' || page === 'Vegetables' || page === 'Dairy') {
      this.products = this.productService.getProductsByCategory(page);
    } else {
      this.products = this.productService.getProducts();
    }
  }

  addToCart(id: number) { this.cartService.add(id); }
  decreaseInCart(id: number) { this.cartService.decrease(id); }
  removeFromCart(id: number) { this.cartService.remove(id); }

  // Array of cart me kitna kya hai (cart page ke liye)
  get cartItems() {
    return Object.keys(this.cart).map(id => {
      const prod = this.productService.getProductById(+id);
      if(prod)
      return { ...prod, quantity: this.cart[+id] };
    return null;
    }).filter(x=>!!x);
  }
}