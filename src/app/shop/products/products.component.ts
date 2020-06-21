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

  noProduct: number = 0;
  products: any;
  totalProducts: number;

  categories: any;
  totalCategories: number;

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
    this.loadAllCategories();
  }

  loadAllProducts() {
    this.shopService.getAll(`${environment.shopUrl}${environment.getProductsURI}`)
      .subscribe((res) => {
        this.products = res;
        this.totalProducts = this.products.length;
        this.setPage(1);
      },
        (error) => {
          throw new Error("Error in loadAllProducts().");
        }
      );
  }

  loadAllCategories() {
    this.shopService.getAll(`${environment.shopUrl}${environment.getCategoriesURI}`)
      .subscribe((res) => {
        this.categories = res;
        this.totalCategories = this.categories.length;
      },
        (error) => {
          throw new Error("Error in loadAllCategories().");
        }
      );
  }

  loadProductsByCategory(catId:number) {
    this.shopService.getAll(`${environment.shopUrl}${environment.getCategoryURI}${catId}${environment.getProductsURI}`)
      .subscribe((res) => {
        this.products = res;
        this.totalProducts = this.products.length;
        this.setPage(1);
        console.log(this.products);
      },
        (error) => {
          this.products = [];
          this.totalProducts = 0;
          this.noProduct = 1;
          this.setPage(1);
          console.log("no items found");
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
