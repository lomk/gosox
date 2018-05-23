import { ProductMaterialQuantity }         from '../entities/product-material-quantity';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductMaterialQuantityService {
  private productMaterialQuantityAllUrl = this.globals.API_URL + '/api/admin/productMaterialQuantity/all';
  private productMaterialQuantityUrl = this.globals.API_URL + '/api/admin/productMaterialQuantity';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductMaterialQuantities(): Observable<ProductMaterialQuantity[]> {
    return this.httpClient
      .get<ProductMaterialQuantity[]>(this.productMaterialQuantityAllUrl, {headers : this.headers,  params: this.params });
  }

  getProductMaterialQuantity(id: number): Observable<ProductMaterialQuantity> {
    const url = `${this.productMaterialQuantityUrl}/${id}`;
    return this.httpClient
      .get<ProductMaterialQuantity>(url, {headers : this.headers,  params: this.params });
  }


  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
