import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {LogoutComponent} from "./components/logout.component";
import {LoginComponent} from "./components/login.component";
import {RoleComponent} from "./components/role.component";
import {UserComponent} from "./components/user.component";
import {AdminModule} from "./modules/admin.module";
import {CustomerModule} from "./modules/customer.module";
import {ManagerModule} from "./modules/manager.module";
import {Globals} from "./globals";
import {CartComponent} from "./components/cart.component";
import {CartProductComponent} from "./components/cart-product.component";
import {ProductComponent} from "./components/product.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RoleComponent,
    UserComponent,
    ProductComponent,
    CartComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    AdminModule,
    CustomerModule,
    ManagerModule,
    AppRoutingModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
