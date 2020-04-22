import { Component, OnInit } from '@angular/core';
import { InventoryService } from './../../../services/inventory.service';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart = [];

  constructor(
    private inventoryService: InventoryService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCart();
  }

  private getCart() {
    this.cart = this.cartService.getCart();
  }

  public getPizzaName (id) {
    return this.inventoryService.getNameById(id);
  }

  public getCartLength() {
    return this.cartService.getCartLength();
  }

  public getCartQty() {
    return this.cartService.getCartQty();
  }

  public getCartShipping() {
    return this.cartService.getCartShipping();
  }

  public getCartSum() {
    return this.cartService.getCartSum();
  }

}
