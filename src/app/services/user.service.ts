import { User }         from '../entities/user';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class UserService {
  private userUrl = this.globals.API_URL + '/api/admin/user';
  private userAddUrl = this.globals.API_URL + '/api/admin/user/add';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }

  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.httpClient
      .get<User>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
