import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
import { ShopService } from './common/services/shop.service';
import { PagerService } from './common/services/pager.service';
import { ProductSortPipe } from './common/product-sort.pipe';
//import { CustomerComponent } from './shop/customer/customer.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { AccountComponent } from './shop/account/account.component';
import { RegisterComponent } from './register/register.component';
import { ReturnsComponent } from './register/returns/returns.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    ProductsComponent,
    ProductSortPipe,
//    CustomerComponent,
    CheckoutComponent,
    AccountComponent,
    RegisterComponent,
    ReturnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ShopService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
