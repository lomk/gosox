import { ProductGender }         from '../entities/product-gender';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductGenderService {
  private productGenderAllUrl = this.globals.API_URL + '/api/admin/productGender/all';
  private productGenderUrl = this.globals.API_URL + '/api/admin/productGender';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductGenders(): Observable<ProductGender[]> {
    return this.httpClient
      .get<ProductGender[]>(this.productGenderAllUrl, {headers : this.headers,  params: this.params });
  }

  getProductGender(id: number): Observable<ProductGender> {
    const url = `${this.productGenderUrl}/${id}`;
    return this.httpClient
      .get<ProductGender>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
