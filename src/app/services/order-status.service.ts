import { OrderStatus }         from '../entities/order-status';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class OrderStatusService {
  private orderStatusAllUrl = this.globals.API_URL + '/api/admin/orderStatus/all';
  private orderStatusUrl = this.globals.API_URL + '/api/admin/orderStatus';
  private orderStatusAddUrl = this.globals.API_URL + '/api/admin/orderStatus/add';
  private orderStatusSearchUrl = this.globals.API_URL + '/api/admin/orderStatus/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getOrderStatuses(): Observable<OrderStatus[]> {
    return this.httpClient
      .get<OrderStatus[]>(this.orderStatusAllUrl, {headers : this.headers,  params: this.params });
  }

  getOrderStatus(id: number): Observable<OrderStatus> {
    const url = `${this.orderStatusUrl}/${id}`;
    return this.httpClient
      .get<OrderStatus>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
