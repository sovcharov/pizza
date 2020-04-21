import { Component, OnInit } from '@angular/core';
import { InventoryService } from './../../../services/inventory.service';
import { CartService } from './../../../services/cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = [];

  constructor(
    private inventoryService: InventoryService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  public getMenu() {
    return this.inventoryService.getMenu(data => {
      this.menu = data;
    });
  }

  public addToCart (i) {
    this.cartService.addToCart(this.menu[i]);
  }

  public getCartLength() {
    return this.cartService.getCartLength();
  }  

}
