import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { PagerService } from "../../common/services/pager.service";
import { environment } from "../../../environments/environment";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

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
  cartNumItems: number = 0;
  cartProducts: any = [];
  currentItem: any;
  taxRate: number = 0.06;
  couponCode: number;
  couponApplied: any;
  couponDiscount: number = 0;
  couponDescription: string;

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
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadAllProducts();
    this.loadAllCategories();
    this.loadCart(1);
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
      cartNumItems: new FormControl(this.cartNumItems),
      cartProducts: new FormControl(this.cartProducts),
      sizeChoice: new FormControl([this.sizeChoice]),
      couponCode: new FormControl([this.couponCode]),
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

  loadCart(userId: number) {
    this.shopService.getAll(`${environment.salesUrl}${environment.getCartItemsURI}${userId}`)
      .subscribe((res) => {
        this.cartProducts = res;
        this.cartNumItems = this.cartProducts.length;

        this.cartTotal = 0;
        let p = null;
        for (p of this.cartProducts) {
          this.cartTotal += p.price;
        }
      },
        (error) => {
          throw new Error("Error in loadCart()");
        }
      );
  }

  loadCoupon(userId: number) {
    this.shopService.getAll(`${environment.salesUrl}${environment.getCouponURI}${userId}`)
      .subscribe((res) => {
        this.couponApplied = res;
        if (this.couponApplied) {
          this.couponCode = this.couponApplied.couponId;
          this.couponDescription = this.couponApplied.couponDesc;
          this.couponDiscount = this.couponApplied.discount;
        }

      },
        (error) => {
          throw new Error("Error in loadCoupon()");
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

        this.loadCart(1);
      },
        (error) => {
          console.log(error);
        }
      );
  }

  removeItem(sku: number) {

    this.shopService.deleteObj(`${environment.salesUrl}${environment.deleteTransactionURI}1/sku/${sku}`)
      .subscribe((res) => {
        this.loadCart(1);
      },
        (error) => {
          console.log(error);
        }
      );
  }

  addCouponCode(couponCode: number) {
    // create a new transaction with user's coupon code
    const transaction = {
      userId: 1,
      coupons: [{
        couponId: couponCode
      }]
    }

    // call sales service to create the transaction if no open transaction already exists;
    // otherwise, the existing open transaction will be updated
    this.shopService.postObj(`${environment.salesUrl}${environment.postCouponURI}`, transaction)
      .subscribe((res) => {

        this.loadCoupon(1);
      },
        (error) => {
          this.couponCode = 0;
          this.couponDiscount = 0;
          this.loadCoupon(1);
        }
      );
  }

  checkout(totalTax: number, totalBill: number) {
    console.log("Checkout method, Tax: " + totalTax.toFixed(2) + ", Total: " + totalBill.toFixed(2));

    const values = {
      userId: 1,
      tax: totalTax,
      total: totalBill
    }

    this.shopService.updateObj(`${environment.salesUrl}${environment.updateTransactionURI}`, values)
      .subscribe((res) => {
        this.modalService.dismissAll();
        this.router.navigate(['gcfashions/shop/checkout']);
        //.navigate(['checkout']);
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
            this.products = [];
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

    this.currentItem = obj;

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
    this.loadCoupon(1);

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
