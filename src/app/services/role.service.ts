import { Role }         from '../entities/role';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';

@Injectable()
export class RoleService {
  private roleAllUrl = this.globals.API_URL + '/api/admin/role/all';
  private roleUrl = this.globals.API_URL + '/api/admin/role';
  private roleAddUrl = this.globals.API_URL + '/api/admin/role/add';
  private roleSearchUrl = this.globals.API_URL + '/api/admin/role/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');

  constructor(private httpClient: HttpClient, private globals: Globals) {
  }

  getRole(id: number): Observable<Role> {
    const url = `${this.roleUrl}/${id}`;
    return this.httpClient.get<Role>(url, {headers : this.headers,  params: this.params });

  }

}
