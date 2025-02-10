import { Routes } from '@angular/router';
import { DonutListComponent } from './donut-list/donut-list.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: '', component: DonutListComponent },
  { path: 'donut/:id', component: DonutDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '' } // Redirects unknown routes to Home
];
