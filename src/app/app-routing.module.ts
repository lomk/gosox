import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import {LoginComponent}             from './components/login.component';
import {LogoutComponent}            from './components/logout.component';


import {AuthService}                from './services/auth.service';
import {CatalogComponent} from "./components/catalog.component";

const routes: Routes = [
  { path: '',                         component: CatalogComponent },
  { path: 'login',                    component: LoginComponent},
  { path: 'logout',                   component: LogoutComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes ,{useHash: true}) ],
  exports: [ RouterModule ], providers : [
    AuthService
  ]
})
export class AppRoutingModule {}
