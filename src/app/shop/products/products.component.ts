import { Component, OnInit } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { PagerService } from "../../common/services/pager.service";
import { environment } from "../../../environments/environment";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
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

  // cart data
  cartDetailsForm: FormGroup;
  cartTotal: number = 0;
  totalItems: number = 0;
  cartproducts: any[];

  // product details modal
  private modalRef: NgbModalRef;
  productDetailsForm: FormGroup;
  productId: number;
  productName: string;
  description: string;
  photo: string;
  price: number;
  inventory: any[];
  sizeChoice: string;
  errMsg: any;
  closeResult: any;

  //sort
  searchProductForm: FormGroup;
  searchString: string;

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
      productId: new FormControl([this.productId]),

    });
    
    this.cartDetailsForm = new FormGroup({
      totalItems: new FormControl(this.totalItems),
      cartproducts: new FormControl(this.cartproducts),

    });
    
    this.searchProductForm = new FormGroup({
      searchString: new FormControl(this.searchString),
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
        this.selectedCategory = cat.catName;
      },
        (error) => {
          this.products = [];
          this.totalProducts = 0;
          this.noProduct = 1;
          this.setPage(1);
        }
      );
  }

  addToCart(itemSku: number) {
    // create a new transaction with item user added to cart
    const transaction = {
      storeId: 1,
      paymentId: 123,
      userId: 1,
      status: "open",
      inventory: [{
        sku: itemSku
      }]
    }

    // call sales service to create the transaction if no open transaction already exists;
    // otherwise, the existing open transaction will be updated
    this.shopService.postObj(`${environment.salesUrl}${environment.postTransactionURI}`, transaction)
      .subscribe((res) => {
        this.modalService.dismissAll();
//       addToCart(name) {
  //  this.cartproducts.push(name);
      this.totalItems += 1;
      },
        (error) => {
          console.log(error);
        }
      );
  }

  loadProductsBySubCategory(catId: number, subcatId: number) {
    this.shopService.getAll(`${environment.shopUrl}${environment.getCategoryURI}${catId}${environment.getSubcategoryURI}${subcatId}`)
      .subscribe((res) => {
        this.products = res;
        this.totalProducts = this.products.length;
        this.setPage(1);
      },
        (error) => {
          this.products = [];
          this.totalProducts = 0;
          this.noProduct = 1;
          this.setPage(1);
        }
      );
  }

  searchProducts() {
    let searchString = this.searchProductForm.value.searchString;
    console.log(searchString);
    let dash = "/";
    if (searchString.length != "") {
      this.shopService
        .getAll(
          `${environment.shopUrl}${environment.getProductsLikeURI}${searchString}`
        )
        .subscribe(
          (res) => {
            this.products = res;
            this.totalProducts = this.products.length;
            this.searchString = "";
            this.setPage(1);
          },
          (error) => {
            this.searchString = "";
            this.products= [];
            this.totalProducts = 0;
            this.setPage(1);
            console.log("mistake");
          }
        );
    } else {
      this.searchString = "";
      this.loadAllProducts();
    }
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
        sizeChoice: [[obj.sizeChoice], [Validators.required]],
        productId: obj.productId,
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

  showCart(content) {
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
