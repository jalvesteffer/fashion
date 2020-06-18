import { Component, OnInit } from '@angular/core';
import { ShopService } from "../common/services/shop.service";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: any;

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
      },
        (error) => {
          throw new Error("Error in loadAllProducts().");
        }
      );
  }

}
