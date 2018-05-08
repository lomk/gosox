import { Component } from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  title = 'Admin';
  content = 'Admin main page';
}
