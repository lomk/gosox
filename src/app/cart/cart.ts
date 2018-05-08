
import {User} from "../user/user";
import {CartProduct} from "../cart-product/cart-product";

export class Cart {
  id: number;
  user: User;
  cartProducts: CartProduct;
}
