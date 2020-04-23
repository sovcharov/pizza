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
  ];

  private activeCurrency: Currency;

  constructor() {
    for(let i = 0; i < this.currencies.length; i += 1) {
      if (this.currencies[i].active) {
        this.activeCurrency = this.currencies[i];
      }
    }
  }


  public setActiveCurrency (id) {
    for(let i = 0; i < this.currencies.length; i += 1) {
      if (this.currencies[i].id === id) {
        this.currencies[i].active = true;
        this.activeCurrency = this.currencies[i];
      } else {
        this.currencies[i].active = false;
      }
    }
  }

  public getAllCurrencies () {
    return this.currencies;
  }

  public getActiveCurrency () {
    return this.activeCurrency;
  }

  public getPriceInActiveCurrency (basePrice) {
    return (Math.round((basePrice / this.activeCurrency.UsdPerCurrency) * 100) / 100).toFixed(2);
  }

  public getActiveCurrenyMark () {
    return this.activeCurrency.mark;
  }

}
