import { Injectable } from '@angular/core';

interface Currency {
  id: number
  currency: string,
  mark: string,
  active: boolean,
  UsdPerCurrency: number
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencies: Currency[] = [
    {
      id: 0,
      currency: "USD",
      mark: "$",
      active: false,
      UsdPerCurrency: 1
    },
    {
      id: 1,
      currency: "EUR",
      mark: "€",
      active: true,
      UsdPerCurrency: 1.1
    }
  ]

  constructor() { }

  public setActiveCurrency (id) {
    for(let i = 0; i < this.currencies.length; i += 1) {
      if (this.currencies[i].id === id) {
        this.currencies[i].active = true;
      } else {
        this.currencies[i].active = false;
      }
    }
  }

  public getAllCurrencies () {
    return this.currencies;
  }



}
