import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private serverService: ServerService) { }
  menu = [];

  public getMenu (callback) {
    this.serverService.getMenu().subscribe(res=>{
      callback(res);
    });
  }

}
