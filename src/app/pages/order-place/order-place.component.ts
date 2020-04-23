import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { CartService } from './../../../services/cart.service';
import { AlertService } from './../../../services/alert.service';

@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.css']
})
export class OrderPlaceComponent implements OnInit {

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private alertService: AlertService

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

    } else {
      this.alertService.addAlert({alertClass: 'danger',text: 'Wrong Phone',comment: 'Mistake in number',});
    }
  }

}
