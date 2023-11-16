import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'Category', component: CategoryComponent},
  { path: 'signup', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'cart', component: CartComponent},
  { path: 'orders', component: PurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
