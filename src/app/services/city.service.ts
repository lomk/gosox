import { City }         from '../entities/city';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class CityService {
  private cityAllUrl = this.globals.API_URL + '/api/admin/city/all';

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getCities(): Observable<City[]> {
    return this.httpClient
      .get<City[]>(this.cityAllUrl, {headers : this.headers,  params: this.params });
  }


  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
