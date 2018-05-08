import { Component, OnInit }    from '@angular/core';

import { Cart }              from './cart';
import { CartService }       from './cart.service';
import {Router}                 from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './cart.component.html' ,
  providers: [CartService]
})
export class CartComponent implements OnInit {
  currentCart: Cart;
  carts: Cart[];
  selectedCart: Cart;

  constructor(
    private router: Router,
    private cartService: CartService) { this.currentCart = JSON.parse(localStorage.getItem('currentCart'));}

  getCarts(): void {
    this.cartService.getCarts().subscribe(carts => this.carts = carts,
      error => {
        if ( error === 401 ) {
          this.router.navigate(['/login']);
        }
      });
  }

  delete(cart: Cart): void {
    this.cartService
      .delete(cart.id)
      .subscribe(() => {
        this.carts = this.carts.filter(h => h !== cart);
        if (this.selectedCart === cart) { this.selectedCart = null; }
      });
  }

  ngOnInit(): void {
    this.getCarts();
  }

  onSelect(cart: Cart): void {
    this.selectedCart = cart;
  }

}
