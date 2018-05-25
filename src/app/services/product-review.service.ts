import { ProductReview }         from '../entities/product-review';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Product} from "../entities/product";
import {User} from "../entities/user";
import {UserAddress} from "../entities/user-address";

@Injectable()
export class ProductReviewService {
  private productReviewAllUrl = this.globals.API_URL + '/api/productReview/all';
  private productReviewUrl = this.globals.API_URL + '/api/productReview';
  private productReviewAddUrl = this.globals.API_URL + '/api/productReview/add';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getProductReviewsByProduct(product: Product): Observable<ProductReview[]> {
    const url = `${this.productReviewAllUrl}?product=${product.id}`;
    return this.httpClient
      .get<ProductReview[]>(url, {headers : this.headers,  params: this.params });
  }

  getProductReviewsByUser(user: User): Observable<ProductReview[]> {
    const url = `${this.productReviewAllUrl}?user=${user.id}`;
    return this.httpClient
      .get<ProductReview[]>(url, {headers : this.headers,  params: this.params });
  }

  getProductReview(id: number): Observable<ProductReview> {
    const url = `${this.productReviewUrl}/${id}`;
    return this.httpClient
      .get<ProductReview>(url, {headers : this.headers,  params: this.params });
  }
  create(productReview: ProductReview): Observable<ProductReview> {
    return this.httpClient
      .post<ProductReview>(this.productReviewAddUrl, JSON.stringify(productReview), {headers : this.headers,  params: this.params });

  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
