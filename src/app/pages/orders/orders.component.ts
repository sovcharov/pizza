import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { CurrencyService } from './../../../services/currency.service';
import { OrdersService } from './../../../services/orders.service';
import { InventoryService } from './../../../services/inventory.service';


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
    private userService: UserService,
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
      }
      this.orders = data;
    });
  }

  public getCurrencyMark (id) {
    return this.currencyService.getCurrencyMark(id);
  }

  public showOrder (id, index) {
    console.log(id, index);
    if (this.orders[index].cart.length) {
      this.orders[index].show = !this.orders[index].show;
    } else {
      this.ordersService.getOrder(id, data => {
        this.orders[index].cart = data;
        this.orders[index].show = !this.orders[index].show;
      });
    }
  }

  public getPizzaName (id) {
    return this.inventoryService.getNameById(id);
  }

}
