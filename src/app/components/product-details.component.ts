import { Component, OnInit }    from '@angular/core';

import { ProductDetails }              from '../entities/product-details';
import { ProductDetailsService }       from '../services/product-details.service';
import {Router}                 from '@angular/router';
import {User} from "../entities/user";

@Component({
  selector: 'app-product-details',
  templateUrl: '../html/product-details.component.html' ,
  providers: [ProductDetailsService]
})
export class ProductDetailsComponent implements OnInit {
  currentUser: User;
  productDetailses: ProductDetails[];
  selectedProductDetails: ProductDetails;
  restError: String;

  constructor(
    private router: Router,
    private productDetailsService: ProductDetailsService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProductDetails(): void {
    this.productDetailsService.getProductDetailss().subscribe(productDetailses => this.productDetailses = productDetailses,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  onSelect(productDetails: ProductDetails): void {
    this.selectedProductDetails = productDetails;
  }

}
