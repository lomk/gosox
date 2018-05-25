import { Component, OnInit }    from '@angular/core';

import { Cart }              from '../entities/cart';
import { CartService }       from '../services/cart.service';
import {User} from "../entities/user";
import {CartProduct} from "../entities/cart-product";
import {CartProductService} from "../services/cart-product.service";

@Component({
  selector: 'app-cart',
  templateUrl: '../templates/cart.component.html' ,
  providers: [CartService, CartProductService]
})
export class CartComponent implements OnInit {
  currentUser: User;
  cart: Cart;
  cartProducts: CartProduct[];
  restError: String;
  isUpdated: boolean;

  constructor(
    // private router: Router,
    private cartService: CartService,
    private cartProductService: CartProductService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  getCartById(id: number): void {
    this.cartService.getCartById(id).subscribe(cart => this.cart = cart,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

  getCartByUser(user: User): void {
    this.cartService.getCartByUser(user).subscribe(cart => this.cart = cart,
      error => {
        if ( error === 401 ) {
          this.restError = "service unavailable";
        }
      });
  }

 updateCart(cart: Cart): void {
   this.cartService.update(cart).subscribe(cart => {
     if (cart == this.cart){
       this.isUpdated = true;
     }},
     error => {
       if ( error === 401 ) {
         this.restError = "service unavailable";
       }
     });
 }


  ngOnInit(): void {
    this.getCartByUser(this.currentUser);
  }


}
