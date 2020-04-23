import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderPlaceComponent } from './pages/order-place/order-place.component';


const routes: Routes = [
    { path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'cart', component: CartComponent },
    { path: 'order-place', component: OrderPlaceComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
