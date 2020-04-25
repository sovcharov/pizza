import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../../services/user.service';
import { CartService } from './../../../services/cart.service';
import { AlertService } from './../../../services/alert.service';
import { OrdersService } from './../../../services/orders.service';
import { CurrencyService } from './../../../services/currency.service';


@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.css']
})
export class OrderPlaceComponent implements OnInit {

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private alertService: AlertService,
    private router: Router,
    private ordersService: OrdersService,
    private currencyService: CurrencyService


  ) { }

  user = {
    address: "",
    phone: ""
  };

  public loading: boolean = false;

  ngOnInit(): void {
    this.getUser();
  }

  getCartLength () {
    return this.cartService.getCartLength();
  }

  getUser() {
    this.user = this.userService.getUser();
  }

  public testNumber () {
    let pattern = /^\+[0-9]{7,12}$/g;
    return pattern.test(this.user.phone);
  }

  public placeOrder() {
    if (this.testNumber()) {
      this.loading = true;
      let order = {
        user: this.userService.getUser().id,
        currecny: this.currencyService.getActiveCurrency().id,
        usdPerCurrency: (this.currencyService.getActiveCurrency().usdPerCurrency),
        cart: this.cartService.getCart(),
        amountPaid: parseFloat(this.currencyService.getPriceInActiveCurrency(this.cartService.getCartSum())),
        shippingCost:  parseFloat(this.currencyService.getPriceInActiveCurrency(this.cartService.getCartShipping())),
        address: this.user.address,
        phone: this.user.phone
      }
      this.ordersService.placeOrder(order, (data) => {
        this.loading = false;
        this.router.navigateByUrl("/orders");
        this.alertService.addAlert({alertClass: 'success',text: 'Order Placed',comment: "Thank you for you order",});
        this.cartService.clearCart();
      });
    } else {
      this.alertService.addAlert({alertClass: 'danger',text: 'Wrong Phone Number',comment: 'Stick to proper format',});
    }
  }

}
