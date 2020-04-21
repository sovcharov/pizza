import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private serverService: ServerService) { }
  public menu: any = [];

  private loadMenu (callback) {
    this.serverService.getMenu().subscribe(res=>{
      callback(res);
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


}
