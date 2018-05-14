import {Product}        from '../entities/product';
import {Injectable}     from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals}        from '../globals';
import {HttpClient,
        HttpHeaders,
        HttpParams}     from "@angular/common/http";

@Injectable()
export class ProductService {
  private productAllUrl = this.globals.API_URL + '/api/admin/product/all';
  private productUrl = this.globals.API_URL + '/api/admin/product';
  private productAddUrl = this.globals.API_URL + '/api/admin/product/add';
  private productSearchUrl = this.globals.API_URL + '/api/admin/product/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');

  constructor(private httpClient: HttpClient, private globals: Globals) {
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

  create(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(this.productAddUrl, JSON.stringify(product), {headers : this.headers,  params: this.params });
  }

  search(term: string): Observable<Product[]> {

    return this.httpClient
      .get<Product[]>(`${this.productSearchUrl}=${term}`, {headers : this.headers,  params: this.params });
  }


  delete(id: number): Observable<void> {
    const url = `${this.productUrl}/${id}`;
    return this.httpClient
      .delete(url, {headers : this.headers,  params: this.params })
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
