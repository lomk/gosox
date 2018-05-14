import { CartProduct }         from '../entities/cart-product';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class CartProductService {
  private cartProductAllUrl = this.globals.API_URL + '/api/admin/cartProduct/all';
  private cartProductUrl = this.globals.API_URL + '/api/admin/cartProduct';
  private cartProductAddUrl = this.globals.API_URL + '/api/admin/cartProduct/add';
  private cartProductSearchUrl = this.globals.API_URL + '/api/admin/cartProduct/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getCartProducts(): Observable<CartProduct[]> {
    return this.httpClient
      .get<CartProduct[]>(this.cartProductAllUrl, {headers : this.headers,  params: this.params });
  }

  getCartProduct(id: number): Observable<CartProduct> {
    const url = `${this.cartProductUrl}/${id}`;
    return this.httpClient
      .get<CartProduct>(url, {headers : this.headers,  params: this.params });
  }

  create(cartProduct: CartProduct): Observable<CartProduct> {
    return this.httpClient
      .post<CartProduct>(this.cartProductAddUrl, JSON.stringify(cartProduct), {headers : this.headers,  params: this.params });

  }

  search(term: string): Observable<CartProduct[]> {

    return this.httpClient
      .get<CartProduct[]>(`${this.cartProductSearchUrl}=${term}`, {headers : this.headers,  params: this.params });
  }

  delete(id: number): Observable<void> {

    const url = `${this.cartProductUrl}/${id}`;
    return this.httpClient
      .delete(url, {headers : this.headers,  params: this.params })
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
