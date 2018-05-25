
import {ProductReviewService}         from '../services/product-review.service';
import {ProductReview}                from '../entities/product-review';
import {Component, OnInit}            from '@angular/core';
import {Router}                       from '@angular/router';
import {NgForm}                       from '@angular/forms';
import {User}                         from "../entities/user";
import {Product}                      from "../entities/product";

@Component({
  selector: 'app-product-review',
  templateUrl: '../html/product-review-form.component.html',
  providers: [
    ProductReviewService
    ]
})
export class ProductReviewFormComponent implements OnInit {
  productReview = new ProductReview();
  error: String;
  currentUser: User;
  currentProduct: Product;

  constructor(private router: Router,
              private productReviewService: ProductReviewService, private product: Product) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit(): void {
    this.currentProduct = this.product;
  }

  onFormSubmit(form: NgForm) {
    const newProductReview = new ProductReview();
    newProductReview.title = form.controls['title'].value;
    newProductReview.body = form.controls['body'].value;
    newProductReview.user = this.currentUser;
    newProductReview.product = this.product;
    this.productReviewService.create(newProductReview)
      .subscribe(productReview => {
        this.productReview = productReview;
      });
  }
}
