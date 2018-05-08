import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {AdminComponent}               from './admin.component';

import {RoleFormComponent}            from '../role/role-form.component';
import {RoleComponent}                from '../role/role.component';
import {UserComponent}                from '../user/user.component';
import {UserFormComponent}            from '../user/user-form.component';
import {AdminGuard}                   from './admin-guard.service';



const adminRoutes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '',                         component: AdminComponent},
      { path: 'role/all',                    component: RoleComponent},
      { path: 'role/new',                component: RoleFormComponent},
      { path: 'user/all',                    component: UserComponent},
      { path: 'user/new',                component: UserFormComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
