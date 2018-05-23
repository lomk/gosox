import { Cart }           from '../entities/cart';
import { Injectable }     from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Globals }        from '../globals';
import { HttpClient,
        HttpHeaders,
        HttpParams }      from "@angular/common/http";

@Injectable()
export class CartService {
  private cartAllUrl = this.globals.API_URL + '/api/admin/cart/all';
  private cartUrl = this.globals.API_URL + '/api/admin/cart';
  private cartAddUrl = this.globals.API_URL + '/api/admin/cart/add';
  private cartSearchUrl = this.globals.API_URL + '/api/admin/cart/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getCart(id: number): Observable<Cart> {
    const url = `${this.cartUrl}/${id}`;
    return this.httpClient
      .get<Cart>(url, {headers : this.headers,  params: this.params })
      .catch(this.handleError);
  }

  create(cart: Cart): Observable<Cart> {
    return this.httpClient
      .post<Cart>(this.cartAddUrl, JSON.stringify(cart), {headers : this.headers,  params: this.params })
      .catch(this.handleError);

  }

  update(cart: Cart): Observable<Cart> {
    return this.httpClient
      .post<Cart>(this.cartAddUrl, JSON.stringify(cart), {headers : this.headers,  params: this.params })
      .catch(this.handleError);

  }

  delete(id: number): Observable<void> {

    const url = `${this.cartUrl}/${id}`;
    return this.httpClient
      .delete(url, {headers : this.headers,  params: this.params })
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
