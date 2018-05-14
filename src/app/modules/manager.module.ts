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
import {ManagerComponent}             from '../components/manager.component';
import {ManagerGuard}                 from '../services/manager-guard.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    ManagerComponent,
    RoleFormComponent,
    UserFormComponent,
  ],
  providers: [
    Globals,
    RoleService,
    UserService,
    AuthService,
    ManagerGuard
  ],
  exports: [
    ManagerComponent
  ]
})
export class ManagerModule { }
