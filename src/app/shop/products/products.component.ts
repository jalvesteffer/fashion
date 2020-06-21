import { Component, OnInit } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { PagerService } from "../../common/services/pager.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  totalProducts: number;

  //pagnation
  pager: any = {};
  pagedProduct: any[];
  pageSize: number = 12;

  constructor(
    private shopService: ShopService,
    private pagerService: PagerService,
  ) { }

  ngOnInit() {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.shopService.getAll(`${environment.shopUrl}${environment.getProductsURI}`)
      .subscribe((res) => {
        this.products = res;
        this.totalProducts = this.products.length;
        this.setPage(1);
        console.log(this.products);
      },
        (error) => {
          throw new Error("Error in loadAllProducts().");
        }
      );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalProducts) {
      return;
    }
    this.pager = this.pagerService.getPager(this.totalProducts, page, this.pageSize);
    this.pagedProduct = this.products.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

}
