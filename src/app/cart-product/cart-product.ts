import {Cart} from "../cart/cart";


export class CartProduct {
  id: number;
  product: Product;
  cart: Cart;
  quantity: number;
}
