import {User} from "./user";
import {DeliveryType} from "./delivery-type";
import {OrderStatus} from "./order-status";
import {OrderedProduct} from "./ordered-product";

export class Order {
  id: number;
  orderStatus: OrderStatus;
  user: User;
  orderedPruducts: OrderedProduct[];
  deliveryType: DeliveryType;
}
