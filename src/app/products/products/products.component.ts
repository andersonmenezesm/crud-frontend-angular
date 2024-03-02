import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
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

  constructor(
    protected productService: ProductsService,
    public dialog: MatDialog
    ) {
    this.products$ = this.productService.getProducts()
      .pipe(
        catchError(error => {
          this.onShowErrorDialog('Erro ao carregar os products!')
          return of([])
        })
      )
  }

  ngOnInit(): void {
  }

  onShowErrorDialog(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    })
  }
}
