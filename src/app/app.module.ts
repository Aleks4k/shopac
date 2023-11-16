import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { MainComponent } from './main/main.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ItemComponent } from './item/item.component';
import { ProductService } from './item/product.service';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { CartService } from './cart/cart.service';
import { CartComponent } from './cart/cart.component';
import { PurchaseService } from './purchase/purchase.service';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CartComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    CarouselModule.forRoot(),
    RatingModule.forRoot(),
  ],
  providers: [
    ProductService,
    UserService,
    CartService,
    PurchaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
