import { Component } from '@angular/core';

import                  'rxjs/add/operator/catch';
import                  'rxjs/add/operator/map';
import                  'rxjs/add/operator/toPromise';
import                  'rxjs/add/observable/throw';

@Component({
  selector: 'app-catalog-home',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent {
  title = 'Catalog';
  content = 'Catalog main page';
}
