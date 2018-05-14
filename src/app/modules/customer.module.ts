import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';

import {AppRoutingModule}           from '../app-routing.module';
import {Globals }                   from '../globals';
import {RoleFormComponent}          from '../components/role-form.component';
import {RoleService}                from '../services/role.service';
import {UserService}                from '../services/user.service';
import {UserFormComponent}          from '../components/user-form.component';
import {AuthService}                from '../services/auth.service';
import {CustomerComponent}             from '../components/customer.component';
import {CustomerGuard}                 from '../services/customer-guard.service';



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
