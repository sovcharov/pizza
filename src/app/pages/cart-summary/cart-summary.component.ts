import { Component, OnInit } from '@angular/core';
import { CartService } from './../../../services/cart.service';
import { CurrencyService } from './../../../services/currency.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  public currencies = [];

  constructor(
    private cartService: CartService,
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.getCurrencies();
  }

  private getCurrencies() {
    this.currencies = this.currencyService.getAllCurrencies();
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

  public setCurrency(id: number) {
    this.currencyService.setActiveCurrency(id);
  }

  public getPriceInActiveCurrency (basePrice: number) {
    return this.currencyService.getPriceInActiveCurrency(basePrice);
  }

  public getActiveCurrenyMark () {
    return this.currencyService.getActiveCurrenyMark();
  }

}
