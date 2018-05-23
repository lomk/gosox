import { ProductReview }         from '../entities/product-review';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class ProductReviewService {
  private productReviewAllUrl = this.globals.API_URL + '/api/admin/productReview/all';
  private productReviewUrl = this.globals.API_URL + '/api/admin/productReview';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductReviews(): Observable<ProductReview[]> {
    return this.httpClient
      .get<ProductReview[]>(this.productReviewAllUrl, {headers : this.headers,  params: this.params });
  }

  getProductReview(id: number): Observable<ProductReview> {
    const url = `${this.productReviewUrl}/${id}`;
    return this.httpClient
      .get<ProductReview>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
