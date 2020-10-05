import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'getAllProducts', component: ListOfProductsComponent },
  { path: 'getProductDetails', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { 

  
}
