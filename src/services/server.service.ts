import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  host = 'http://localhost:3339';

  constructor(public http: HttpClient) { }

  public getMenu(){
    return this.http.get<{data: any}>(`${this.host}/api/getmenu`);
  }

  public placeOrder (order) {
    // return this.http.post(`${this.host}/api/getmenu`,{cart: {}});
  }

  public getOrders (user) {
    return this.http.get<{data: any}>(`${this.host}/api/getorders/${user}`);
  }

  public getOrder (orderId) {
    return this.http.get<{data: any}>(`${this.host}/api/getorder/${orderId}`);
  }

}
