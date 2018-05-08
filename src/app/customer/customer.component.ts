import { Component } from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {
  title = 'Customer';
  content = 'Customer main page';
}
