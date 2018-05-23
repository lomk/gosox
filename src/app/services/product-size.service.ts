import { ProductSize }         from '../entities/product-size';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductSizeService {
  private productSizeAllUrl = this.globals.API_URL + '/api/admin/productSize/all';
  private productSizeUrl = this.globals.API_URL + '/api/admin/productSize';
  private productSizeAddUrl = this.globals.API_URL + '/api/admin/productSize/add';
  private productSizeSearchUrl = this.globals.API_URL + '/api/admin/productSize/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductSizes(): Observable<ProductSize[]> {
    return this.httpClient
      .get<ProductSize[]>(this.productSizeAllUrl, {headers : this.headers,  params: this.params });
  }

  getProductSize(id: number): Observable<ProductSize> {
    const url = `${this.productSizeUrl}/${id}`;
    return this.httpClient
      .get<ProductSize>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
