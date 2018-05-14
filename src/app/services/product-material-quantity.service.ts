import { User }         from '../entities/product-material-quantity';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class UserService {
  private userAllUrl = this.globals.API_URL + '/api/admin/user/all';
  private userUrl = this.globals.API_URL + '/api/admin/user';
  private userAddUrl = this.globals.API_URL + '/api/admin/user/add';
  private userSearchUrl = this.globals.API_URL + '/api/admin/user/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.userAllUrl, {headers : this.headers,  params: this.params });
  }

  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.httpClient
      .get<User>(url, {headers : this.headers,  params: this.params });
  }

  create(user: User): Observable<User> {
    return this.httpClient
      .post<User>(this.userAddUrl, JSON.stringify(user), {headers : this.headers,  params: this.params });

  }

  search(term: string): Observable<User[]> {

    return this.httpClient
      .get<User[]>(`${this.userSearchUrl}=${term}`, {headers : this.headers,  params: this.params });
  }

  delete(id: number): Observable<void> {

    const url = `${this.userUrl}/${id}`;
    return this.httpClient
      .delete(url, {headers : this.headers,  params: this.params })
      .catch(this.handleError);
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
