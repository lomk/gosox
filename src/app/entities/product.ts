import {ProductBrand} from "./product-brand";
import {ProductCategory} from "./product-category";
import {ProductGender} from "./product-gender";
import {ProductSize} from "./product-size";
import {ProductMaterial} from "./product-material";

export class Product {
  id: number;
  name: String;
  shortDescription: String;
  fullDescription: String;
  seoDescription: String;
  barcode: number;
  internalCode: number;
  price: number;
  isNew: boolean;;
  inPromoution: boolean;
  productBrand: ProductBrand;
  productCategory: ProductCategory;
  productGender: ProductGender;
  productSize: ProductSize;
  productMaterial: ProductMaterial;

}
