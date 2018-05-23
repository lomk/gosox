import { ProductDetails }         from '../entities/product-details';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductDetailsService {
  private productDetailsAllUrl = this.globals.API_URL + '/api/admin/productDetails/all';
  private productDetailsUrl = this.globals.API_URL + '/api/admin/productDetails';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductDetailss(): Observable<ProductDetails[]> {
    return this.httpClient
      .get<ProductDetails[]>(this.productDetailsAllUrl, {headers : this.headers,  params: this.params });
  }

  getProductDetails(id: number): Observable<ProductDetails> {
    const url = `${this.productDetailsUrl}/${id}`;
    return this.httpClient
      .get<ProductDetails>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
