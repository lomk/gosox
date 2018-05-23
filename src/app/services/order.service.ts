import { Order }         from '../entities/order';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class OrderService {
  private orderAllUrl = this.globals.API_URL + '/api/admin/order/all';
  private orderUrl = this.globals.API_URL + '/api/admin/order';
  private orderAddUrl = this.globals.API_URL + '/api/admin/order/add';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getOrders(): Observable<Order[]> {
    return this.httpClient
      .get<Order[]>(this.orderAllUrl, {headers : this.headers,  params: this.params });
  }

  getOrder(id: number): Observable<Order> {
    const url = `${this.orderUrl}/${id}`;
    return this.httpClient
      .get<Order>(url, {headers : this.headers,  params: this.params });
  }

  create(order: Order): Observable<Order> {
    return this.httpClient
      .post<Order>(this.orderAddUrl, JSON.stringify(order), {headers : this.headers,  params: this.params });

  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
