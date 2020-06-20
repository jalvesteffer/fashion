import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';

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
        path: "gcfashions/shop/products",
        component: ProductsComponent,
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