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
    // this.serverService.placeOrder(cart).subscribe(res=>{
    //   callback(res);
    // });
  }

  public getOrders (user, callback) {
    this.serverService.getOrders(user).subscribe(res=>{
      console.log(res);
      this.orders = res;
      callback(res);
    });
  }

  public getOrder (user, callback) {
    // this.serverService.getOrders(user).subscribe(res=>{
    //   console.log(res);
    //   this.orders = res;
    //   callback(res);
    // });
  }

}
