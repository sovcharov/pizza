import { Component, OnInit } from '@angular/core';
import { InventoryService } from './../../../services/inventory.service';
import { CartService } from './../../../services/cart.service';
import { CurrencyService } from './../../../services/currency.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart = [];
  public currencies = [];
  constructor(
    private inventoryService: InventoryService,
    private cartService: CartService,
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.getCart();
    this.getCurrencies();
  }

  private getCart() {
    this.cart = this.cartService.getCart();
  }

  private getCurrencies() {
    this.currencies = this.currencyService.getAllCurrencies();
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
    return this.getPriceInActiveCurrency(this.cartService.getCartSum());
  }

  public setCurrency(id) {
    this.currencyService.setActiveCurrency(id);
  }

  public getPriceInActiveCurrency (basePrice) {
    return this.currencyService.getPriceInActiveCurrency(basePrice);
  }

  public getActiveCurrenyMark () {
    return this.currencyService.getActiveCurrenyMark();
  }

}
