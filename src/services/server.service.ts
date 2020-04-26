import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  host: string = 'http://localhost:3339';

  constructor(
    public http: HttpClient,
    private configService: ConfigService
  ) {
    this.host = configService.config.host;
  }

  public getMenu(){
    return this.http.get<{data: any}>(`${this.host}/api/getmenu`);
  }

  public placeOrder (order) {
    return this.http.post(`${this.host}/api/saveorder`, {order: order});
  }

  public getOrders (user) {
    return this.http.get<{data: any}>(`${this.host}/api/getorders/${user}`);
  }

  public getOrder (orderId) {
    return this.http.get<{data: any}>(`${this.host}/api/getorder/${orderId}`);
  }

}
