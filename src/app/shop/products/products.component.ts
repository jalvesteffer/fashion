import { Component, OnInit } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { PagerService } from "../../common/services/pager.service";
import { environment } from "../../../environments/environment";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // header
  selectedCategory: string = "All Products";

  // product data
  noProduct: number = 0;
  products: any;
  totalProducts: number;

  // category data
  categories: any;
  totalCategories: number;

  // product details modal
  private modalRef: NgbModalRef;
  productDetailsForm: FormGroup;
  productName: string;
  description: string;
  photo: string;
  price: number;
  inventory: any[];
  sizeChoice: string;
  errMsg: any;
  closeResult: any;

  // pagination
  pager: any = {};
  pagedProduct: any[];
  pageSize: number = 12;

  constructor(
    private shopService: ShopService,
    private pagerService: PagerService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loadAllProducts();
    this.loadAllCategories();
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.productDetailsForm = new FormGroup({
      productName: new FormControl(this.productName),
      description: new FormControl(this.description),
      photo: new FormControl(this.photo),
      price: new FormControl(this.price),
      inventory: new FormControl([this.inventory]),
      sizeChoice: new FormControl([this.sizeChoice]),
    });
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

  loadProductsByCategory(cat) {
    this.shopService.getAll(`${environment.shopUrl}${environment.getCategoryURI}${cat.catId}${environment.getProductsURI}`)
      .subscribe((res) => {
        this.products = res;
        this.totalProducts = this.products.length;
        this.setPage(1);
        console.log(this.products);
        this.selectedCategory = cat.catName;
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

  addToCart() {
    console.log("Add to cart function called");
  }

  open(content, obj) {

    // this.loadAllBooks();

    if (obj !== null) {
      this.productDetailsForm = this.fb.group({
        productName: obj.productName,
        description: obj.description,
        photo: obj.photo,
        price: obj.price,
        inventory: [obj.inventory],
        sizeChoice: [[obj.sizeChoice], [Validators.maxLength(1)]],
      })
    }

    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then(
      (result) => {
        this.errMsg = "";
        this.closeResult = `Closed with ${result}`;
      },
      (reason) => {
        this.errMsg = "";
        this.closeResult = `Dismissed`;
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
