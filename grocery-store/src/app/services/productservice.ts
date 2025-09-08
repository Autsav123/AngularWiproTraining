import { Injectable } from '@angular/core';
import { Product,PRODUCTS } from '../data';
@Injectable({
  providedIn: 'root'
})
export class Productservice {
  private products:Product[]=PRODUCTS;
    getProducts():Product[]{
      return this.products;
      }
      getProductsByCategory(category:string):Product[]{
        return this.products.filter(p=>p.category===category);
  
      }
      getProductById(id:number):Product |undefined{
        return this.products.find(p=>p.id===id);
      }
}
