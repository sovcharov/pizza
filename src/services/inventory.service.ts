import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private serverService: ServerService) { }
  menu = [];

  public test (callback) {
    this.serverService.test().subscribe(res=>{
      callback(res);
    });
  }

}
