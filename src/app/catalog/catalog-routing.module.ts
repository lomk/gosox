import {RouterModule, Routes}         from '@angular/router';
import {NgModule}                     from '@angular/core';

import {CatalogComponent}               from './catalog.component';

import {RoleFormComponent}            from '../role/role-form.component';
import {RoleComponent}                from '../role/role.component';
import {UserComponent}                from '../user/user.component';
import {UserFormComponent}            from '../user/user-form.component';
import {CatalogGuard}                   from './catalog-guard.service';



const catalogRoutes: Routes = [
  {
    path: 'catalog', component: CatalogComponent,
    canActivate: [CatalogGuard],
    children: [
      { path: '',                         component: CatalogComponent},
      { path: 'role/all',                    component: RoleComponent},
      { path: 'role/new',                component: RoleFormComponent},
      { path: 'user/all',                    component: UserComponent},
      { path: 'user/new',                component: UserFormComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(catalogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule { }
