import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {ManagerComponent}               from '../components/manager.component';

import {RoleFormComponent}            from '../components/role-form.component';
import {RoleComponent}                from '../components/role.component';
import {UserComponent}                from '../components/user.component';
import {UserFormComponent}            from '../components/user-form.component';
import {ManagerGuard}                   from '../services/manager-guard.service';



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
