import { Component, OnInit }    from '@angular/core';

import { ProductReview }              from '../entities/product-review';
import { ProductReviewService }       from '../services/product-review.service';
import {Router}                 from '@angular/router';
import {User} from "../entities/user";
import {Product} from "../entities/product";

@Component({
  selector: 'app-productReviews',
  templateUrl: '../templates/product-review.component.html' ,
  providers: [ProductReviewService]
})
export class ProductReviewComponent implements OnInit {
  currentUser: User;
  productReviews: ProductReview[];
  selectedProductReview: ProductReview;

  constructor(
    private router: Router,
    private productReviewService: ProductReviewService,
    private product: Product) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getProductReviewsByProduct(product: Product): void {
    this.productReviewService.getProductReviewsByProduct(product).subscribe(productReviews => this.productReviews = productReviews,
      error => {
        if ( error === 401 ) {
          this.router.navigate(['/login']);
        }
      });
  }

  ngOnInit(): void {
    this.getProductReviewsByProduct(this.product);
  }

  onSelect(productReview: ProductReview): void {
    this.selectedProductReview = productReview;
  }

}
