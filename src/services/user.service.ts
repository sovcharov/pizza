import { Injectable } from '@angular/core';

interface User {
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  currency: number,
  phone: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    address: "123 Main st. #12, leave at the door",
    currency: 0,
    phone: "+79113332211"
  }

  constructor() { }

  public getUser () {
    return this.user;
  }

  public getUserCurrency(callback) {
    callback(this.user.currency);
  }


}
