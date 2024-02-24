import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = '/assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.API)
      .pipe(
        first(),
        tap(products => console.log(products))
      )
  }
}
