
import {User} from "./user";
import {CartProduct} from "./cart-product";

export class Cart {
  id: number;
  user: User;
  cartProducts: CartProduct;
}
