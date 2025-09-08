import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Cartservice {
  private cartData:{[id:number]: number}={};
  private cartSubject=new BehaviorSubject<{[id:number]:number}>({});
  cart$=this.cartSubject.asObservable();
  add(id:number){
    if(this.cartData[id]){
      this.cartData[id]++;
    }
    else{
      this.cartData[id]=1;
    }
      this.cartSubject.next({
        ...this.cartData
      });
    }

   decrease(id:number){
    if(this.cartData[id]>1){
      this.cartData[id]--;
    }
    else delete this.cartData[id];
    this .cartSubject.next({
      ...this.cartData
    });
   }
remove(id:number){
  delete this.cartData[id];
  this.cartSubject.next({
    ...this.cartData
  });
}
}
