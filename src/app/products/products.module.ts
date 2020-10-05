import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ProductsComponent, ListOfProductsComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class ProductsModule { }
