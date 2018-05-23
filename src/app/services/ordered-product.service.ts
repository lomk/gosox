import { OrderedProduct }         from '../entities/ordered-product';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class OrderedProductService {
  private orderedProductAllUrl = this.globals.API_URL + '/api/admin/orderedProduct/all';
  private orderedProductUrl = this.globals.API_URL + '/api/admin/orderedProduct';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getOrderedProducts(): Observable<OrderedProduct[]> {
    return this.httpClient
      .get<OrderedProduct[]>(this.orderedProductAllUrl, {headers : this.headers,  params: this.params });
  }

  getOrderedProduct(id: number): Observable<OrderedProduct> {
    const url = `${this.orderedProductUrl}/${id}`;
    return this.httpClient
      .get<OrderedProduct>(url, {headers : this.headers,  params: this.params });
  }
}
