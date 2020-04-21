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
          found = true;
        }
      }
      if (!found) {
        this.cart[this.cart.length] = {itemId: item.id, qty: 1};
      }
    } else {
      this.cart[this.cart.length] = {itemId: item.id, qty: 1};
    }
    console.log(this.cart);
  }

  public getCartLength() {
    return this.cart.length;
  }

}
