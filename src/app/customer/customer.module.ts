import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';

import {AppRoutingModule}           from '../app-routing.module';
import {Globals }                   from '../globals';
import {RoleFormComponent}          from '../role/role-form.component';
import {RoleService}                from '../role/role.service';
import {UserService}                from '../user/user.service';
import {UserFormComponent}          from '../user/user-form.component';
import {AuthService}                from '../auth/auth.service';
import {CustomerComponent}             from './customer.component';
import {CustomerGuard}                 from './customer-guard.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    CustomerComponent,
    RoleFormComponent,
    UserFormComponent,
  ],
  providers: [
    Globals,
    RoleService,
    UserService,
    AuthService,
    CustomerGuard
  ],
  exports: [
    CustomerComponent
  ]
})
export class CustomerModule { }
