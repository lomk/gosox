import { Component, OnInit }          from '@angular/core';

import { ProductBrand }               from '../entities/product-brand';
import { ProductBrandService }        from '../services/product-brand.service';
import {Router}                       from '@angular/router';
import {User}                         from "../entities/user";

@Component({
  selector: 'app-product-brand',
  templateUrl: '../templates/product-brand.component.html' ,
  providers: [ProductBrandService]
})
export class ProductBrandComponent implements OnInit {
  currentUser: User;
  productBrands: ProductBrand[];
  selectedProductBrand: ProductBrand;
  restError: String;

  constructor(
    private router: Router,
    private productBrandService: ProductBrandService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProductBrands(): void {
    this.productBrandService.getProductBrands().subscribe(productBrands => this.productBrands = productBrands,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  ngOnInit(): void {
    this.getProductBrands();
  }

  onSelect(productBrand: ProductBrand): void {
    this.selectedProductBrand = productBrand;
  }

}
