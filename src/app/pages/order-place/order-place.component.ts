import { Component, OnInit } from '@angular/core';
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
    private ordersService: OrdersService,
    private currencyService: CurrencyService


  ) { }

  user = {
    address: "",
    phone: ""
  };

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
      console.log(this.cartService.getCart());
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
      console.log(order);
      this.ordersService.placeOrder(order, (data) => {

      });
    } else {
      this.alertService.addAlert({alertClass: 'danger',text: 'Wrong Phone Number',comment: 'Stick to proper format',});
    }
  }

}
