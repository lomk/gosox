import { Component, OnInit }    from '@angular/core';
import {Router}                 from '@angular/router';
import {ProductCategoryService} from "../services/product-category.service";
import {ProductCategory} from "../entities/product-category";
import {User} from "../entities/user";

@Component({
  selector: 'app-product-categories',
  templateUrl: '../html/product-category.component.html' ,
  providers: [ProductCategoryService]
})
export class ProductCategoryComponent implements OnInit {
  currentUser: User;
  productCategories: ProductCategory[];
  selectedProductCategory: ProductCategory;
  restError: String;

  constructor(
    private router: Router,
    private productCategoryService: ProductCategoryService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProductCategories(): void {
    this.productCategoryService.getProductCategories().subscribe(productCategories => this.productCategories = productCategories,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }


  ngOnInit(): void {
    this.getProductCategories();
  }

  onSelect(productCategory: ProductCategory): void {
    this.selectedProductCategory = productCategory;
  }

}
