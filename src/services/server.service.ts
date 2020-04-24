import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(public http: HttpClient) { }

  public getMenu(){
    return this.http.get('./assets/data/testMenu.json');
  }

  public placeOrder (order) {
    // return this.http.post('url',{cart: cart});
  }

  public getOrders (user) {
    return this.http.get('./assets/data/testOrders.json');
  }

  public getOrder (orderId) {
    //return this.http.get('./assets/data/test.json');
  }

}
