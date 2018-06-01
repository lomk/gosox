import {Globals} from "./globals";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {LogoutComponent} from "./components/logout.component";
import {LoginComponent} from "./components/login.component";
import {RoleComponent} from "./components/role.component";
import {UserComponent} from "./components/user.component";
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
import {ProductSizeComponent} from "./components/product-size.component";
import {UserFormComponent} from "./components/user-form.component";
import {UserGenderComponent} from "./components/user-gender.component";
import {UserProfileComponent} from "./components/user-profile.component";
import {UserProfileFormComponent} from "./components/user-profile-form.component";
import {CatalogComponent} from "./components/catalog.component";
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {AlertModule, CollapseModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
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
    ProductReviewFormComponent,
    ProductSizeComponent,
    UserFormComponent,
    UserGenderComponent,
    UserProfileComponent,
    UserProfileFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  isCollapsed = true;
}
