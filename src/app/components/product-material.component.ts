import { Component, OnInit }    from '@angular/core';

import {Router}                 from '@angular/router';

import {User} from "../entities/user";
import {ProductMaterialService} from "../services/product-material.service";
import {ProductMaterial} from "../entities/product-material";

@Component({
  selector: 'app-product-materials',
  templateUrl: '../html/product-material.component.html' ,
  providers: [ProductMaterialService]
})
export class ProductMaterialComponent implements OnInit {
  currentUser: User;
  productMaterials: ProductMaterial[];
  selectedProductMaterial: ProductMaterial;
  restError: String;

  constructor(
    private router: Router,
    private productMaterialService: ProductMaterialService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProductMaterials(): void {
    this.productMaterialService.getProductMaterials().subscribe(productMaterials => this.productMaterials = productMaterials,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }


  ngOnInit(): void {
    this.getProductMaterials();
  }

  onSelect(productMaterial: ProductMaterial): void {
    this.selectedProductMaterial = productMaterial;
  }

}
