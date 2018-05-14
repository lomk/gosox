import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import {LoginComponent}             from './components/login.component';
import {LogoutComponent}            from './components/logout.component';
import {AdminComponent}             from './components/admin.component';
import {AdminRoutingModule}         from './modules/admin-routing.module';

import {AuthService}                from './services/auth.service';

const routes: Routes = [
  { path: '',                         redirectTo: '/admin', pathMatch: 'full' },
  { path: 'login',                    component: LoginComponent},
  { path: 'logout',                   component: LogoutComponent},
  { path: 'admin',                    component: AdminComponent}
  // { path: 'tester',                   component: TesterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes ,{useHash: true}), AdminRoutingModule ],
  exports: [ RouterModule ], providers : [
    AuthService
  ]
})
export class AppRoutingModule {}
