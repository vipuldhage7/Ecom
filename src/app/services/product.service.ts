import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductPagingData } from '../models/product-paging-data';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public productList = [];

  url ="http://localhost:8080/getAllProducts";
  getDetailsURL ="http://localhost:8080/getProductDetails";

  getAllProducts(): Observable<any>
  {
   return this.http.get<any>(`${this.url}`);
  }

  
  getDetails(id: string): Observable<any>
  {
  return this.http.post<any>(`${this.getDetailsURL}`,id);
  }

}
