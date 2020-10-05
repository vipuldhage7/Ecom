import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductPagingData } from 'src/app/models/product-paging-data';
import { Paging } from 'src/app/models/paging';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {

  public productList = [];
  data : Array<any>
  totalRecords: number
  page:string="1"
  
  constructor(private productService: ProductService,
    private router: Router) { 
   
  }

  ngOnInit(): void {
   
    this.productService.getAllProducts().subscribe(
      
        data=>{
              console.log("Success !! "+data);
              this.data = data.products
              this.totalRecords = data.products.length
              
              },
         error=>console.log("Error!! "+error.status)
    );
}

getDetails(id: string)
  {
    localStorage.setItem('productId', id);
    this.router.navigate(['/products/getProductDetails']);
  }

  

}
