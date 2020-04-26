import { CurrencyService } from './currency.service';
import { UserService } from './user.service';


describe('Service: Currency', () => {
  let userService = new UserService ();
  let currencyService = new CurrencyService(userService);
  let userCurrency;
  userService.getUserCurrency(data=>{
    userCurrency = data;
  })
  currencyService.setActiveCurrency(userCurrency);
  it('should return currency', ()=>{
    expect(currencyService.getCurrencyMark(0)).toEqual('$');
  });
  it('should set user currency', ()=>{
    expect(currencyService.getActiveCurrency().id).toEqual(userCurrency);
  });
})
