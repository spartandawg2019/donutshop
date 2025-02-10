import { Routes } from '@angular/router';
import { DonutListComponent } from './donut-list/donut-list.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: DonutListComponent },
  { path: 'donut/:id', component: DonutDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent } // Handles unknown routes
];
