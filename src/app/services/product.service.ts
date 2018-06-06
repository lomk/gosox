import {Product}        from '../entities/product';
import {Injectable}     from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals}        from '../globals';
import {HttpClient,
        HttpHeaders,
        HttpParams}     from "@angular/common/http";

@Injectable()
export class ProductService {
  private productAllUrl = this.globals.API_URL + '/api/product/all';
  private productUrl = this.globals.API_URL + '/api/product';
  private productTopUrl = this.globals.API_URL + '/api/product/top';
  private productSearchUrl = this.globals.API_URL + '/api/product/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  // private params = new HttpParams().set('withCredentials', 'true');
  private params = new HttpParams();

  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getTopProducts(): Observable<Product[]> {
    console.log("Get top products")
    return this.httpClient
      .get<Product[]>(this.productTopUrl, {headers : this.headers,  params: this.params });
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient
      .get<Product[]>(this.productAllUrl, {headers : this.headers,  params: this.params });
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.httpClient
      .get<Product>(url, {headers : this.headers,  params: this.params });
  }

  search(term: string): Observable<Product[]> {

    return this.httpClient
      .get<Product[]>(`${this.productSearchUrl}=${term}`, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
