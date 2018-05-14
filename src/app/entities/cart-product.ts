import {Cart}         from "./cart";
import {Product}      from "./product";


export class CartProduct {
  id: number;
  product: Product;
  cart: Cart;
  quantity: number;
}
