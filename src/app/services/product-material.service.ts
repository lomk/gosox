import { ProductMaterial }         from '../entities/product-material';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductMaterialService {
  private productMaterialAllUrl = this.globals.API_URL + '/api/admin/productMaterial/all';
  private productMaterialUrl = this.globals.API_URL + '/api/admin/productMaterial';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductMaterials(): Observable<ProductMaterial[]> {
    return this.httpClient
      .get<ProductMaterial[]>(this.productMaterialAllUrl, {headers : this.headers,  params: this.params });
  }

  getProductMaterial(id: number): Observable<ProductMaterial> {
    const url = `${this.productMaterialUrl}/${id}`;
    return this.httpClient
      .get<ProductMaterial>(url, {headers : this.headers,  params: this.params });
  }


  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
