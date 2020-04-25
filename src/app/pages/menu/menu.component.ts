import { Component, OnInit } from '@angular/core';
import { InventoryService } from './../../../services/inventory.service';
import { CartService } from './../../../services/cart.service';
import { CurrencyService } from './../../../services/currency.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu = [];
  activeCurrency: any;
  public currencies = [];
  public loading: boolean = false;


  constructor(
    private inventoryService: InventoryService,
    private cartService: CartService,
    private currencyService: CurrencyService

  ) { }

  ngOnInit(): void {
    this.getMenu();
    this.getCurrencies();

  }

  public getMenu() {
    this.loading = true;
    return this.inventoryService.getMenu(data => {
      this.menu = data;
      this.loading = false;
    });
  }

  private getCurrencies() {
    this.currencies = this.currencyService.getAllCurrencies();
  }

  public addToCart (i) {
    this.cartService.addToCart(this.menu[i]);
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

  public getActiveCurrency () {
    this.activeCurrency = this.currencyService.getActiveCurrency();
  }

  public getPriceInActiveCurrency (basePrice) {
    return this.currencyService.getPriceInActiveCurrency(basePrice);
  }

  public getActiveCurrenyMark () {
    return this.currencyService.getActiveCurrenyMark();
  }

  public setCurrency(id) {
    this.currencyService.setActiveCurrency(id);
  }

}
