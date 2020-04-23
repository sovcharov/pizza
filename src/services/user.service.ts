import { Injectable } from '@angular/core';

interface User {
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
    firstName: "John",
    lastName: "Doe",
    address: "123 Main st. #12, leave at the door",
    currency: 1,
    phone: "+79119269689"
  }

  constructor() { }

  public getUser () {
    return this.user;
  }
}
