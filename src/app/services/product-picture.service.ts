import { ProductPicture }         from '../entities/product-picture';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductPictureService {
  private productPictureAllUrl = this.globals.API_URL + '/api/admin/productPicture/all';
  private productPictureUrl = this.globals.API_URL + '/api/admin/productPicture';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductPictures(): Observable<ProductPicture[]> {
    return this.httpClient
      .get<ProductPicture[]>(this.productPictureAllUrl, {headers : this.headers,  params: this.params });
  }

  getProductPicture(id: number): Observable<ProductPicture> {
    const url = `${this.productPictureUrl}/${id}`;
    return this.httpClient
      .get<ProductPicture>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
