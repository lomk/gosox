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
import {AdminComponent}             from '../components/admin.component';
import {AdminGuard}                 from '../services/admin-guard.service';
import {CartFormComponent}          from "../components/cart-form.component";




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AdminComponent,
    RoleFormComponent,
    UserFormComponent,
    CartFormComponent
  ],
  providers: [
    Globals,
    RoleService,
    UserService,
    AuthService,
    AdminGuard
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
