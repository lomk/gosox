import { Component } from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager.component.html'
})
export class ManagerComponent {
  title = 'Manager';
  content = 'Manager main page';
}
