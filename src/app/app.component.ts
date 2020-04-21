import { Component } from '@angular/core';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza';

  constructor(
    private cartService: CartService
  ) { }

  public getCartLength() {
    return this.cartService.getCartLength();
  }
}
