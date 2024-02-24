import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      _id: Math.random().toString(10),
      name: 'Product Lorem',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      price: 29,
      category: 'Category A',
      stock: 2
    },
    {
      _id: Math.random().toString(10),
      name: 'Product Lorem 2',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem item',
      price: 15.90,
      category: 'Category B',
      stock: 3
    },
  ]

  displayedColumns = ['name', 'category', 'price']

  constructor() { }

  ngOnInit(): void {
  }
}
