import { Component, OnInit }    from '@angular/core';

import { ProductGender }              from '../entities/product-gender';
import { ProductGenderService }       from '../services/product-gender.service';
import {Router}                 from '@angular/router';
import {User} from "../entities/user";

@Component({
  selector: 'app-productGenders',
  templateUrl: '../templates/product-gender.component.html' ,
  providers: [ProductGenderService]
})
export class ProductGenderComponent implements OnInit {
  currentUser: User;
  productGenders: ProductGender[];
  selectedProductGender: ProductGender;

  constructor(
    private router: Router,
    private productGenderService: ProductGenderService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProductGenders(): void {
    this.productGenderService.getProductGenders().subscribe(productGenders => this.productGenders = productGenders,
      error => {
        if ( error === 401 ) {
          this.router.navigate(['/login']);
        }
      });
  }



  ngOnInit(): void {
    this.getProductGenders();
  }

  onSelect(productGender: ProductGender): void {
    this.selectedProductGender = productGender;
  }

}
