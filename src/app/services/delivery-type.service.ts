import { DeliveryType }         from '../entities/delivery-type';
import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Globals} from '../globals';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class DeliveryTypeService {
  private deliveryTypeAllUrl = this.globals.API_URL + '/api/admin/deliveryType/all';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private params = new HttpParams().set('withCredentials', 'true');


  constructor(private httpClient: HttpClient, private globals: Globals) {
  }
  getDeliveryTypes(): Observable<DeliveryType[]> {
    return this.httpClient
      .get<DeliveryType[]>(this.deliveryTypeAllUrl, {headers : this.headers,  params: this.params });
  }


  public handleError = (error: Response) => {
    return Observable.throw(error.status);
  }
}
