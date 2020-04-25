import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders: any = [];

  constructor(
    private serverService: ServerService
  ) {

  }

  public placeOrder(order, callback) {
    this.serverService.placeOrder(order).subscribe(res=>{
      callback(res);
    });
  }

  public getOrders (user, callback) {
    this.serverService.getOrders(user).subscribe(res => {
      this.orders = res.data;
      console.log(this.orders);
      callback(this.orders);
    });
  }

  public getOrder (order, callback) {
    this.serverService.getOrder(order).subscribe(res=>{
      callback(res.data);
    });
  }

}
