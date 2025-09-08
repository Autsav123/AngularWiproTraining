import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { Navbar } from './Component/navbar/navbar';
import { Home } from './Component/home/home';
import { ProductList } from './Component/product-list/product-list';
import { ProductCard } from './Component/product-card/product-card';
import { Cart } from './Component/cart/cart';

@NgModule({
  declarations: [
   AppComponent,
   Navbar,
    Home,
    ProductList,
    ProductCard,
    Cart
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
