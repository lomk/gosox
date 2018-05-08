import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {CustomerComponent}               from './customer.component';

import {RoleFormComponent}            from '../role/role-form.component';
import {RoleComponent}                from '../role/role.component';
import {UserComponent}                from '../user/user.component';
import {UserFormComponent}            from '../user/user-form.component';
import {CustomerGuard}                   from './customer-guard.service';



const customerRoutes: Routes = [
  {
    path: 'customer', component: CustomerComponent,
    canActivate: [CustomerGuard],
    children: [
      { path: '',                         component: CustomerComponent},
      { path: 'role/all',                    component: RoleComponent},
      { path: 'role/new',                component: RoleFormComponent},
      { path: 'user/all',                    component: UserComponent},
      { path: 'user/new',                component: UserFormComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }
