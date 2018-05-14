import {CartService}        from '../services/cart.service';
import {Cart}               from '../entities/cart';
import {Component, OnInit}  from '@angular/core';
import {Router}             from '@angular/router';
import {NgForm}             from '@angular/forms';
import {CartProduct}        from "../entities/cart-product";
import {CartProductService} from "../services/cart-product.service";
import {User} from "../entities/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-cart-form',
  templateUrl: '../templates/cart-form.component.html',
  providers: [
    CartService,
    CartProductService]
})
export class CartFormComponent implements OnInit {
  cart = new Cart();
  cartProducts: CartProduct[];
  error: String;
  currentUser: User;

  constructor(private router: Router,
              private cartService: CartService,
              private cartProductService: CartProductService,
              private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getData(): void {
    this.cartProductService.getCartProducts().subscribe(cartProducts => this.cartProducts = cartProducts);
  }
  ngOnInit(): void {
    this.getData();
  }

  onFormSubmit(form: NgForm) {
    const newCart = new Cart();
    newCart.user = form.controls['user'].value;
    newCart.cartProducts = form.controls['cartProducts'].value;
    this.cartService.create(newCart)
      .subscribe(cart => {
        this.cart = cart;
        this.router.navigate([this.currentUser.role.name.toLowerCase() + '/carts'])
          .catch(error =>  console.error('asdasdasdasdasd'));
      });
  }
}
