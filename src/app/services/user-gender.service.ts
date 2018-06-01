import { UserGender }         from '../entities/user-gender';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class UserGenderService {
  private userGenderAllUrl = this.globals.API_URL + '/api/admin/userGender/all';
  private userGenderUrl = this.globals.API_URL + '/api/admin/userGender';
  private userGenderAddUrl = this.globals.API_URL + '/api/admin/userGender/add';
  private userGenderSearchUrl = this.globals.API_URL + '/api/admin/userGender/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');

  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getUserGenders(): Observable<UserGender[]> {
    return this.httpClient
      .get<UserGender[]>(this.userGenderAllUrl, {headers : this.headers,  params: this.params });
  }

  getUserGender(id: number): Observable<UserGender> {
    const url = `${this.userGenderUrl}/${id}`;
    return this.httpClient
      .get<UserGender>(url, {headers : this.headers,  params: this.params });
  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
