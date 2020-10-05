import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  
  cartUrl = "http://localhost:8080/cart";
  add: string;
  cart: Cart = new Cart();

 public itemsInCart = [];
  constructor(private http: HttpClient) { }

  addToCart(cart :Cart): Observable<any>
  {
    this.add = this.cartUrl + "/addToCart";
    // this.itemsInCart.push(productId);

    return this.http.post<any>(`${this.add}`, cart);
  }

  removeSpecificFromCart()
  {

  }

  getCart()
  {
    console.log("Items in cart:: "+this.itemsInCart);
    return this.itemsInCart;
  }

  clearCart()
  {
    this.itemsInCart = [];
    return this.itemsInCart;
  }
}
