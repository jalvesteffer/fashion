import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';
//import { CustomerComponent } from './shop/customer/customer.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { AccountComponent } from './shop/account/account.component';
import { RegisterComponent } from './register/register.component';
import { ReturnsComponent } from './register/returns/returns.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "gcfashions/home",
        pathMatch: "full",
      },
      {
        path: "gcfashions/home",
        component: HomeComponent,
      },
      {
        path: "gcfashions/shop",
        component: ShopComponent,
      },
      {
        path: "gcfashions/sales",
        component: RegisterComponent,
      },
      {
        path: "gcfashions/sales/returns",
        component: ReturnsComponent,
      },
      {
        path: "gcfashions/shop/products",
        component: ProductsComponent,
      },
      {
        path: "gcfashions/shop/myaccount",
        component: AccountComponent,
      },
      {
        path: "gcfashions/shop/checkout",
        component: CheckoutComponent,
      },
      // {
      //   path: "**",
      //   component: LmserrorComponent,
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
