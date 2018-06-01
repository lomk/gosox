import { Component, OnInit }        from '@angular/core';

import { ProductSize }              from '../entities/product-size';
import { ProductSizeService }       from '../services/product-size.service';
import {Router}                     from '@angular/router';
import {User}                       from "../entities/user";

@Component({
  selector: 'app-productSizes',
  templateUrl: '../html/product-size.component.html' ,
  providers: [ProductSizeService]
})
export class ProductSizeComponent implements OnInit {
  currentUser: User;
  productSizes: ProductSize[];
  selectedProductSize: ProductSize;
  restError: String;

  constructor(
    private router: Router,
    private productSizeService: ProductSizeService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProductSizes(): void {
    this.productSizeService.getProductSizes().subscribe(productSizes => this.productSizes = productSizes,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }


  ngOnInit(): void {
    this.getProductSizes();
  }

  onSelect(productSize: ProductSize): void {
    this.selectedProductSize = productSize;
  }

}
