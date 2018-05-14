import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {CustomerComponent}               from '../components/customer.component';

import {RoleFormComponent}            from '../components/role-form.component';
import {RoleComponent}                from '../components/role.component';
import {UserComponent}                from '../components/user.component';
import {UserFormComponent}            from '../components/user-form.component';
import {CustomerGuard}                   from '../services/customer-guard.service';



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
