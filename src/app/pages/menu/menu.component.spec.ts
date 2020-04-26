import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryService } from './../../../services/inventory.service';
import { CurrencyService } from './../../../services/currency.service';




describe('Component: MenuComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [HttpClientModule]
    });
  });

  it('Should create Menu Component', () => {
    let fixture = TestBed.createComponent(MenuComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should use the menu from the menu service', () => {
    let fixture = TestBed.createComponent(MenuComponent);
    let app = fixture.debugElement.componentInstance;
    let inventoryService = fixture.debugElement.injector.get(InventoryService);
    fixture.detectChanges();
    expect(inventoryService.menu).toEqual(app.menu);
  });

  it('Should get data from service successfully', (() => {
    let fixture = TestBed.createComponent(MenuComponent);
    let app = fixture.debugElement.componentInstance;
    let currencyService = fixture.debugElement.injector.get(CurrencyService);
    let spy = spyOn(currencyService, 'getActiveCurrenyMark')
      .and.returnValue('Dollar');
    expect(app.getActiveCurrenyMark()).toBe('Dollar');

  }));

})
