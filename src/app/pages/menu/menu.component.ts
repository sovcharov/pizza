import { Component, OnInit } from '@angular/core';
import { InventoryService } from './../../../services/inventory.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.test();
  }

  public test() {
    this.inventoryService.test(data => {
      console.log(data)
    });
  }

}
