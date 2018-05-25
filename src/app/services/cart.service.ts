import { Cart }           from '../entities/cart';
import { Injectable }     from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Globals }        from '../globals';
import { HttpClient,
        HttpHeaders,
        HttpParams }      from "@angular/common/http";
import {User} from "../entities/user";
import {CartProduct} from "../entities/cart-product";

@Injectable()
export class CartService {
  private cartUrl = this.globals.API_URL + '/api/cart';
  private cartUpdUrl = this.globals.API_URL + '/api/cart/update/';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');

  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getCartById(id: number): Observable<Cart> {
    const url = `${this.cartUrl}?id=${id}`;
    return this.httpClient
      .get<Cart>(url, {headers : this.headers,  params: this.params });
  }

  getCartByUser(user: User): Observable<Cart> {
    const url = `${this.cartUrl}?user=${user.id}`;
    return this.httpClient
      .get<Cart>(url, {headers : this.headers,  params: this.params });
  }

  update(cart: Cart): Observable<Cart> {
    const url = `${this.cartUpdUrl}/${cart.id}`;
    return this.httpClient
      .post<Cart>(url, JSON.stringify(cart), {headers : this.headers,  params: this.params });
  }



  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
