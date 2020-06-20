import { Component, OnInit } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  totalProducts: number;

  constructor(
    private shopService: ShopService,
  ) { }

  ngOnInit() {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.shopService.getAll(`${environment.shopUrl}${environment.getProductsURI}`)
      .subscribe((res) => {
        this.products = res;
        this.totalProducts = this.products.length;
      },
        (error) => {
          throw new Error("Error in loadAllProducts().");
        }
      );
  }

}
