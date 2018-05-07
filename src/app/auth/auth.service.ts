
import { Injectable }   from '@angular/core';

import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {User} from '../user/user';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";


@Injectable()
export class AuthService {


  private currentUserUrl = this.globals.API_URL + '/logon/getUser';
  private loginUrl = this.globals.API_URL + '/login';
  private logoutUrl = this.globals.API_URL + '/logout';

  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private http: HttpClient, private globals: Globals) {
  }

  getCurrentUser(): Observable<any> {

    return this.http.get(this.currentUserUrl, {headers : this.headers,  params: this.params })
      .map(response => {
        if (response.status === 200) {
          return response.json() as User;
        }
      })
      .catch(this.handleError);
  }

  isAuthenticated(): boolean {
    let result = false;
    this.http.get(this.currentUserUrl, {headers : this.headers,  params: this.params })
      .map(response => {
        if (response.status === 200) {
          result = true;
        }
      }).catch(this.handleError);
    return result;
  }

  isAdmin(): boolean {
    let result = false;

    this.http.get(this.currentUserUrl, {headers : this.headers,  params: this.params });
      .map(response => {
        if (response.status === 200) {
          if ( response.json().role.name === 'ADMIN' ) {
            result = true;
            return true;
          }
        }
      }).catch(this.handleError);
    return result;
  }

  login(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('submit', 'Login');

    return this.http
      .post(this.loginUrl, {headers : this.headers,  params: this.params, body: body.toString() });
  }

  logout(): Observable<void> {

    return this.http
      .get(this.logoutUrl,  {headers : this.headers,  params: this.params });
  }

}
