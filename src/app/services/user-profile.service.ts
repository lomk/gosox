import { UserProfile }         from '../entities/user-profile';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class UserProfileService {
  private userProfileAllUrl = this.globals.API_URL + '/api/admin/userProfile/all';
  private userProfileUrl = this.globals.API_URL + '/api/admin/userProfile';
  private userProfileAddUrl = this.globals.API_URL + '/api/admin/userProfile/add';
  private userProfileSearchUrl = this.globals.API_URL + '/api/admin/userProfile/search';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getUserProfiles(): Observable<UserProfile[]> {
    return this.httpClient
      .get<UserProfile[]>(this.userProfileAllUrl, {headers : this.headers,  params: this.params });
  }

  getUserProfile(id: number): Observable<UserProfile> {
    const url = `${this.userProfileUrl}/${id}`;
    return this.httpClient
      .get<UserProfile>(url, {headers : this.headers,  params: this.params });
  }

  create(userProfile: UserProfile): Observable<UserProfile> {
    return this.httpClient
      .post<UserProfile>(this.userProfileAddUrl, JSON.stringify(userProfile), {headers : this.headers,  params: this.params });

  }

  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
