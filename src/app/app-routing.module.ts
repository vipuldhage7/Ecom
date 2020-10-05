import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }, 
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
