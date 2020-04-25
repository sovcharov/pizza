import { Injectable } from '@angular/core';
import { InventoryService } from './inventory.service';

interface CartItem {
  itemId: number,
  qty: number,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItem[] = [];

  constructor(
    private inventoryService: InventoryService,
  ) { }

  public getCart () {
    return this.cart;
  }

  public addToCart (item) {
    if(this.cart.length) {
      let found = false;
      for(let i = 0; i < this.cart.length; i += 1) {
        if(this.cart[i].itemId === item.id) {
          this.cart[i].qty += item.qty || 1;
          this.cart[i].price = item.price;
          found = true;
        }
      }
      if (!found) {
        this.cart[this.cart.length] = {itemId: (item.id), qty: item.qty || 1, price: parseFloat(item.price)};
      }
    } else {
      this.cart[this.cart.length] = {itemId: (item.id), qty: item.qty || 1, price: parseFloat(item.price)};
    }
  }

  public getCartLength() {
    return this.cart.length;
  }

  public getCartQty() {
    let qty = 0;
    for(let i = 0; i < this.cart.length; i += 1) {
      qty += (this.cart[i].qty);
    }
    return qty;
  }

  public getCartShipping() {
    if (this.getCartSumWithoutShipping()<30) {
      let flatRate = 5;
      let shippingCostOnePizza = 0.5;
      let qty = this.getCartQty();
      return qty ? qty * shippingCostOnePizza + flatRate : 0;
    } else {
      return 0;
    }

  }

  private getCartSumWithoutShipping () {
    let sum = 0;
    for(let i = 0; i < this.cart.length; i += 1) {
      sum += ((this.cart[i].price)*(this.cart[i].qty));
    }
    return sum;
  }

  public getCartSum() {
    let sum = 0;
    for(let i = 0; i < this.cart.length; i += 1) {
      sum += ((this.cart[i].price)*(this.cart[i].qty));
    }
    return (sum>=30) ? sum : sum + this.getCartShipping();
  }

  public changeQty(index, x) {
    this.cart[index].qty += x;
    if (!this.cart[index].qty) {
      this.cart[index].qty = 1;
    }
  }

  public deletePizza(index) {
    this.cart.splice(index,1);
  }

  public clearCart() {
    this.cart = [];
  }

}
