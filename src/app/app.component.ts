import { Component } from '@angular/core';
import { CartService } from './../services/cart.service';
import { UserService } from './../services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza';

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) { }

  public getCartLength() {
    return this.cartService.getCartLength();
  }

  public getUserFirstLast() {
    return `${this.userService.getUser().firstName} ${this.userService.getUser().lastName}`;
  }
}
