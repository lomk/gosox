import { ProductCategory }         from '../entities/product-category';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductCategoryService {
  private productCategoryAllUrl = this.globals.API_URL + '/api/admin/productCategory/all';
  private productCategoryUrl = this.globals.API_URL + '/api/admin/productCategory';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductCategorys(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<ProductCategory[]>(this.productCategoryAllUrl, {headers : this.headers,  params: this.params });
  }

  getProductCategory(id: number): Observable<ProductCategory> {
    const url = `${this.productCategoryUrl}/${id}`;
    return this.httpClient
      .get<ProductCategory>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
