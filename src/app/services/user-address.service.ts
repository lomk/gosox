import { UserAddress }         from '../entities/user-address';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class UserAddressAddressService {
  private userAddressAllUrl = this.globals.API_URL + '/api/admin/userAddress/all';
  private userAddressUrl = this.globals.API_URL + '/api/admin/userAddress';
  private userAddressAddUrl = this.globals.API_URL + '/api/admin/userAddress/add';
  private userAddressSearchUrl = this.globals.API_URL + '/api/admin/userAddress/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getUserAddresss(): Observable<UserAddress[]> {
    return this.httpClient
      .get<UserAddress[]>(this.userAddressAllUrl, {headers : this.headers,  params: this.params });
  }

  getUserAddress(id: number): Observable<UserAddress> {
    const url = `${this.userAddressUrl}/${id}`;
    return this.httpClient
      .get<UserAddress>(url, {headers : this.headers,  params: this.params });
  }

  create(userAddress: UserAddress): Observable<UserAddress> {
    return this.httpClient
      .post<UserAddress>(this.userAddressAddUrl, JSON.stringify(userAddress), {headers : this.headers,  params: this.params });

  }

  search(term: string): Observable<UserAddress[]> {

    return this.httpClient
      .get<UserAddress[]>(`${this.userAddressSearchUrl}=${term}`, {headers : this.headers,  params: this.params });
  }

  delete(id: number): Observable<void> {

    const url = `${this.userAddressUrl}/${id}`;
    return this.httpClient
      .delete(url, {headers : this.headers,  params: this.params })
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
