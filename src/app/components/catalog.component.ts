import { Component, OnInit }    from '@angular/core';

import { Product }              from '../entities/product';
import { ProductService }       from '../services/product.service';
import {Router}                 from '@angular/router';
import {User} from "../entities/user";

@Component({
  selector: 'app-catalog',
  templateUrl: '../html/catalog.component.html' ,
  providers: [ProductService]
})
export class CatalogComponent implements OnInit {
  currentUser: User;
  products: Product[];
  selectedProduct: Product;
  pages: number;
  currentPage: number;
  restError: String;
  title: string = "Catalog";

  constructor(
    private router: Router,
    private productService: ProductService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  ngOnInit(): void {
    // this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
