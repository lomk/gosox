import {RoleService}        from '../role/role.service';
import {Role}               from '../role/role';
import {CartService}        from './cart.service';
import {Cart}               from './cart';
import {Component, OnInit}  from '@angular/core';
import {Router}             from '@angular/router';
import {NgForm}             from '@angular/forms';
import {CartProduct} from "../cart-product/cart-product";

@Component({
  selector: 'local-ip-form',
  templateUrl: './cart-form.component.html',
  providers: [
    CartService,
    RoleService]
})
export class CartFormComponent implements OnInit {
  cart = new Cart();
  roles: Role[];
  error: String;
  currentCart: Cart;

  constructor(private router: Router,
              private cartService: CartService,
              private cartProductService: CartProductService) {
    this.currentCart = JSON.parse(localStorage.getItem('currentCart'));
  }

  getData(): void {
    this.roleService.getRoles().subscribe(roles => this.roles = roles);
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
        this.router.navigate([this.user.role.name.toLowerCase() + '/carts'])
          .catch(error =>  console.error('asdasdasdasdasd'));
      });
  }
}
