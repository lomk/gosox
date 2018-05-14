import {Product} from "./product";
import {Order} from "./order";

export class OrderedProduct {
  id: number;
  product: Product;
  order: Order;
  quantity: number;
}
