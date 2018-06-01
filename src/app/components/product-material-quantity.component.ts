import { Component, OnInit }    from '@angular/core';

import { ProductMaterialQuantity }              from '../entities/product-material-quantity';
import { ProductMaterialQuantityService }       from '../services/product-material-quantity.service';
import {Router}                 from '@angular/router';
import {User} from "../entities/user";

@Component({
  selector: 'app-productMaterialQuantitys',
  templateUrl: '../html/product-material-quantity.component.html' ,
  providers: [ProductMaterialQuantityService]
})
export class ProductMaterialQuantityComponent implements OnInit {
  currentUser: User;
  productMaterialQuantitys: ProductMaterialQuantity[];
  selectedProductMaterialQuantity: ProductMaterialQuantity;
  restError: String;

  constructor(
    private router: Router,
    private productMaterialQuantityService: ProductMaterialQuantityService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProductMaterialQuantities(): void {
    this.productMaterialQuantityService.getProductMaterialQuantities().subscribe(productMaterialQuantitys => this.productMaterialQuantitys = productMaterialQuantitys,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }



  ngOnInit(): void {
    this.getProductMaterialQuantities();
  }

  onSelect(productMaterialQuantity: ProductMaterialQuantity): void {
    this.selectedProductMaterialQuantity = productMaterialQuantity;
  }

}
