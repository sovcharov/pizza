import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.css']
})
export class OrderPlaceComponent implements OnInit {

  constructor() { }

  user = {
    address: "Mani st 23"
  }

  phone: string = "";

  ngOnInit(): void {

  }

  public testNumber () {
    let pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  }

}
