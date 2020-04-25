import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(
    private serverService: ServerService
  ) { }
  public menu: any = [];

  private loadMenu (callback) {
    this.serverService.getMenu().subscribe(res=>{
      callback(res.data);
    });
  }

  public getMenu (callback) {
    if (this.menu.length) {
      callback(this.menu);
    } else {
      this.loadMenu((data)=>{
        this.menu = data;
        callback(this.menu);
      });
    }
  }

  public getNameById (id) {
    if(this.menu.length) {
      return this.findPizza(id).name;
    } else {
      this.loadMenu((data)=>{
        this.menu = data;
        return this.findPizza(id).name;
      });
    }
  }

  private findPizza (id) {
    for (let i = 0; i < this.menu.length; i += 1) {
      if (this.menu[i].id === id) {
        return this.menu[i];
      }
    }
  }

  private findPizzaAsync (id, callback) {
    for (let i = 0; i < this.menu.length; i += 1) {
      if (this.menu[i].id === id) {
        callback(this.menu[i]);
        break;
      }
    }
  }

  public getPriceInBaseCurrency (id, callback) {
    this.findPizzaAsync(id, data => {
      callback(data.price);
    });
  }


}
