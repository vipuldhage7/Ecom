import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  images = [];
   productId: string;
   userName: string;
   cart: Cart = new Cart();

  constructor(private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
  
     this.cart.product_id = localStorage.getItem('productId');
      this.cart.user_id = localStorage.getItem('userId');
      // this.cart.product_id = this.productId;
      // this.cart.product_id = this.productId;
    console.log("Cart details:: "+this.cart);

    this.productService.getDetails(this.cart.product_id).subscribe(
      
    data=>{
          console.log("Success !! "+data);
          this.images = data;  
          },
     error=>console.log("Error!! "+error.status)
);

  }

  addToCart()
  {
    this.cartService.addToCart(this.cart).subscribe(
      data=>{
        window.alert('Your product has been added to the cart!');
      },
      error=>
      {
        window.alert('Oops!! Something wrong. Please try after some time.');
      }

    );
    
    
    
    
    this.cartService.getCart();
    console.log("addToCart is clicked having id as :: "+this.productId)
  }
 
}
