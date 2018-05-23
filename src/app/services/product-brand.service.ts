import { ProductBrand }         from '../entities/product-brand';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductBrandService {
  private productBrandAllUrl = this.globals.API_URL + '/api/admin/productBrand/all';
  private productBrandUrl = this.globals.API_URL + '/api/admin/productBrand';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductBrands(): Observable<ProductBrand[]> {
    return this.httpClient
      .get<ProductBrand[]>(this.productBrandAllUrl, {headers : this.headers,  params: this.params });
  }

  getProductBrand(id: number): Observable<ProductBrand> {
    const url = `${this.productBrandUrl}/${id}`;
    return this.httpClient
      .get<ProductBrand>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
