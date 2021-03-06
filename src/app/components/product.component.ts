import { Component, OnInit }    from '@angular/core';

import { Product }              from '../entities/product';
import { ProductService }       from '../services/product.service';
import {Router}                 from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: '../html/product.component.html' ,
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  currentProduct: Product;
  products: Product[];
  selectedProduct: Product;
  pages: number;
  currentPage: number;
  restError: String;

  constructor(
    private router: Router,
    private productService: ProductService) { this.currentProduct = JSON.parse(localStorage.getItem('currentProduct'));}

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }


}
