import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {LogoutComponent} from "./auth/logout.component";
import {LoginComponent} from "./auth/login.component";
import {RoleComponent} from "./role/role.component";
import {RoleFormComponent} from "./role/role-form.component";
import {UserComponent} from "./user/user.component";
import {AdminModule} from "./admin/admin.module";
import {CustomerModule} from "./customer/customer.module";
import {CatalogModule} from "./catalog/catalog.module";
import {ManagerModule} from "./manager/manager.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RoleComponent,
    UserComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpClient,
    AdminModule,
    CustomerModule,
    CatalogModule,
    ManagerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
