import {Role}       from './role';
import {User} from "./user";
import {Product} from "./product";

export class ProductReview {
  id: number;
  title: String;
  body: String;
  user: User;
  product: Product;
}
