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

import {Globals} from "./globals";
import {CartComponent} from "./components/cart.component";
import {ProductComponent} from "./components/product.component";
import {CityComponent} from "./components/city.component";
import {OrderComponent} from "./components/order.component";
import {DeliveryTypeComponent} from "./components/delivery-type.component";
import {ProductBrandComponent} from "./components/product-brand.component";
import {ProductCategoryComponent} from "./components/product-category.component";
import {ProductDetailsComponent} from "./components/product-details.component";
import {ProductGenderComponent} from "./components/product-gender.component";
import {ProductMaterialComponent} from "./components/product-material.component";
import {ProductMaterialQuantityComponent} from "./components/product-material-quantity.component";
import {ProductPictureComponent} from "./components/product-picture.component";
import {ProductReviewComponent} from "./components/product-review.component";
import {ProductReviewFormComponent} from "./components/product-review-form.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RoleComponent,
    UserComponent,
    CartComponent,
    CityComponent,
    DeliveryTypeComponent,
    OrderComponent,
    ProductComponent,
    ProductBrandComponent,
    ProductCategoryComponent,
    ProductDetailsComponent,
    ProductGenderComponent,
    ProductMaterialComponent,
    ProductMaterialQuantityComponent,
    ProductPictureComponent,
    ProductReviewComponent,
    ProductReviewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient,
    AppRoutingModule
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
