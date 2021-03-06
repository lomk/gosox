import { Component, OnInit }    from '@angular/core';

import { ProductPicture }               from '../entities/product-picture';
import { ProductPictureService }        from '../services/product-picture.service';
import {Router}                         from '@angular/router';
import {User}                           from "../entities/user";

@Component({
  selector: 'app-productPictures',
  templateUrl: '../html/product-picture.component.html' ,
  providers: [ProductPictureService]
})
export class ProductPictureComponent implements OnInit {
  currentUser: User;
  productPictures: ProductPicture[];
  selectedProductPicture: ProductPicture;
  restError: String;

  constructor(
    private router: Router,
    private productPictureService: ProductPictureService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProductPictures(): void {
    this.productPictureService.getProductPictures().subscribe(productPictures => this.productPictures = productPictures,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }


  ngOnInit(): void {
    this.getProductPictures();
  }

  onSelect(productPicture: ProductPicture): void {
    this.selectedProductPicture = productPicture;
  }

}
