import { Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = [];

  constructor(
    private inventoryService: InventoryService,
  ) { }

  public addToCart (item) {
    if(this.cart.length) {
      let found = false;
      for(let i = 0; i < this.cart.length; i += 1) {
        if(this.cart[i].itemId === item.id) {
          this.cart[i].qty +=1;
          this.cart[i].price = item.price;
          found = true;
        }
      }
      if (!found) {
        this.cart[this.cart.length] = {itemId: item.id, qty: 1, price: item.price};
      }
    } else {
      this.cart[this.cart.length] = {itemId: item.id, qty: 1, price: item.price};
    }
    console.log(this.cart);
  }

  public getCartLength() {
    return this.cart.length;
  }

  public getCartQty() {
    let qty = 0;
    for(let i = 0; i < this.cart.length; i += 1) {
      qty += parseFloat(this.cart[i].qty);
    }
    return qty;
  }

  public getCartSum() {
    let sum = 0;
    for(let i = 0; i < this.cart.length; i += 1) {
      sum += (parseFloat(this.cart[i].price)*parseFloat(this.cart[i].qty));
    }
    return sum;
  }


}
