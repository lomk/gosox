import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {ManagerComponent}               from './manager.component';

import {RoleFormComponent}            from '../role/role-form.component';
import {RoleComponent}                from '../role/role.component';
import {UserComponent}                from '../user/user.component';
import {UserFormComponent}            from '../user/user-form.component';
import {ManagerGuard}                   from './manager-guard.service';



const managerRoutes: Routes = [
  {
    path: 'manager', component: ManagerComponent,
    canActivate: [ManagerGuard],
    children: [
      { path: '',                         component: ManagerComponent},
      { path: 'role/all',                    component: RoleComponent},
      { path: 'role/new',                component: RoleFormComponent},
      { path: 'user/all',                    component: UserComponent},
      { path: 'user/new',                component: UserFormComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(managerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManagerRoutingModule { }
