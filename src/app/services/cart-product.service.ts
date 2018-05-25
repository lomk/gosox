import {CartProduct}        from '../entities/cart-product';
import {Injectable}         from '@angular/core';
import {Observable}         from 'rxjs/Observable';
import {Globals}            from '../globals';
import {HttpClient, HttpHeaders, HttpParams}         from "@angular/common/http";
import {Product}            from "../entities/product";
import {Cart}               from "../entities/cart";

@Injectable()
export class CartProductService {
  private cartProductAllUrl = this.globals.API_URL + '/api/admin/cart-product/all';
  private cartProductUrl = this.globals.API_URL + '/api/admin/cart-product';
  private cartProductAddUrl = this.globals.API_URL + '/api/admin/cart-product/add';
  private cartProductUpdUrl = this.globals.API_URL + '/api/admin/cart-product/upd';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getCartProductsByCart(cart: Cart): Observable<CartProduct[]> {
    const url = `${this.cartProductUrl}?cart=${cart.id}`;
    return this.httpClient
      .get<CartProduct[]>(this.cartProductAllUrl, {headers : this.headers,  params: this.params });
  }

  getCartProduct(id: number): Observable<CartProduct> {
    const url = `${this.cartProductUrl}?id=${id}`;
    return this.httpClient
      .get<CartProduct>(url, {headers : this.headers,  params: this.params });
  }

  getCartProductByProduct(product: Product): Observable<CartProduct> {
    const url = `${this.cartProductUrl}?product=${product.id}`;
    return this.httpClient
      .get<CartProduct>(url,
        {headers : this.headers,  params: this.params });
  }

  create(cartProduct: CartProduct): Observable<CartProduct> {
    return this.httpClient
      .post<CartProduct>(this.cartProductAddUrl,
        JSON.stringify(cartProduct),
        {headers : this.headers,  params: this.params });

  }

  update(cartProduct: CartProduct): Observable<CartProduct> {
    const url = `${this.cartProductUpdUrl}?id=${cartProduct.id}`;
    return this.httpClient
      .post<CartProduct>(url,
        JSON.stringify(cartProduct),
        {headers : this.headers,  params: this.params });

  }

  delete(id: number): Observable<void> {

    const url = `${this.cartProductUrl}/${id}`;
    return this.httpClient
      .delete<void>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
