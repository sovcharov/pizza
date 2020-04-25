import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { CurrencyService } from './../../../services/currency.service';
import { OrdersService } from './../../../services/orders.service';
import { InventoryService } from './../../../services/inventory.service';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  orders: any = [];
  constructor(
    private currencyService: CurrencyService,
    private inventoryService: InventoryService,
    private cartService: CartService,
    private userService: UserService,
    private router: Router,
    private ordersService: OrdersService

  ) { }

  ngOnInit(): void {
    this.getOrders(this.userService.getUser().id);
  }

  getOrders(user){
    this.ordersService.getOrders(user, data => {
      for (let i = 0; i < data.length; i += 1) {
        data[i].show = false;
        data[i].loading = false;
        data[i].cart = [];
      }
      this.orders = data;
    });
  }

  public getCurrencyMark (id) {
    return this.currencyService.getCurrencyMark(id);
  }

  public showOrder (id, index) {
    // console.log(id, index);
    // console.log(this.orders);
    if (this.orders[index].cart.length) {
      this.orders[index].show = !this.orders[index].show;
    } else {
      this.orders[index].loading = true;
      this.inventoryService.getMenu(data => {
        this.ordersService.getOrder(id, data => {
          this.orders[index].cart = data;
          console.log(this.orders);
          this.orders[index].loading = false;
          this.orders[index].show = !this.orders[index].show;
        });
      })
    }
  }

  public getPizzaName (id) {
    return this.inventoryService.getNameById(id);
  }

  public orderAgain (cart) {
    for (let i = 0; i < cart.length; i += 1) {
      this.inventoryService.getPriceInBaseCurrency(cart[i].itemId, (data)=>{
        let item = {
          id: cart[i].itemId,
          qty: cart[i].qty,
          price: data
        };
        this.cartService.addToCart(item);
      });
    }
    this.router.navigateByUrl("/cart");
  }

  public getDeliveredInfo(delivered) {
    return delivered ? 'Yes' : 'No';
  }

}
