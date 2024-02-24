import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>

  displayedColumns = ['name', 'category', 'price']

  constructor(protected productService: ProductsService) {
    this.products$ = this.productService.getProducts()
  }

  ngOnInit(): void {
  }
}
