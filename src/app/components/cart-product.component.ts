import { Component, OnInit }        from '@angular/core';

import { CartProduct }              from '../entities/cart-product';
import { CartProductService }       from '../services/cart-product.service';
import { Router }                   from '@angular/router';

@Component({
  selector: 'app-cartProducts',
  templateUrl: '../templates/cart-product.component.html' ,
  providers: [CartProductService]
})
export class CartProductComponent implements OnInit {
  currentCartProduct: CartProduct;
  cartProducts: CartProduct[];
  selectedCartProduct: CartProduct;

  constructor(
    private router: Router,
    private cartProductService: CartProductService) { this.currentCartProduct = JSON.parse(localStorage.getItem('currentCartProduct'));}

  getCartProducts(): void {
    this.cartProductService.getCartProducts().subscribe(cartProducts => this.cartProducts = cartProducts,
      error => {
        if ( error === 401 ) {
          this.router.navigate(['/login']);
        }
      });
  }

  delete(cartProduct: CartProduct): void {
    this.cartProductService
      .delete(cartProduct.id)
      .subscribe(() => {
        this.cartProducts = this.cartProducts.filter(h => h !== cartProduct);
        if (this.selectedCartProduct === cartProduct) { this.selectedCartProduct = null; }
      });
  }

  ngOnInit(): void {
    this.getCartProducts();
  }

  onSelect(cartProduct: CartProduct): void {
    this.selectedCartProduct = cartProduct;
  }
}
