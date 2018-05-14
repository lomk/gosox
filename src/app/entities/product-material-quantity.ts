import {ProductMaterial} from "./product-material";
import {Product} from "./product";

export class ProductMaterialQuantity {
  id: number;
  quantity: number;
  productMaterial: ProductMaterial;
  product: Product;
}
