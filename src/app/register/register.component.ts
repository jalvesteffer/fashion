import { Component, OnInit } from '@angular/core';
import { ShopService } from "../common/services/shop.service";
import { AuthService } from "../common/services/auth.service";
import { environment } from "../../environments/environment";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // product details modal
  productDetailsForm: FormGroup;

  //sort
  searchInventoryForm: FormGroup;
  searchString: string;

  // inventory data
  inventory: any;
  sku: string;
  sizeChoice: string;

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

  constructor(
    private shopService: ShopService,
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initializeFormGroup();
    this.loadCart(Number(localStorage.getItem('userId')));
  }

  initializeFormGroup() {
    this.cartDetailsForm = new FormGroup({
      cartNumItems: new FormControl(this.cartNumItems),
      cartProducts: new FormControl(this.cartProducts),
      sizeChoice: new FormControl([this.sizeChoice]),
      couponCode: new FormControl([this.couponCode]),
    });

    this.searchInventoryForm = new FormGroup({
      searchString: new FormControl(this.searchString),
    });
  }

  loadCart(userId: number) {
    this.shopService.getAll(`${environment.shopUrl}${environment.getCartItemsURI}${userId}`)
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
          console.log("Error in loading Cart.");
        }
      );
  }

  loadCoupon(userId: number) {
    this.shopService.getAll(`${environment.shopUrl}${environment.getCouponURI}${userId}`)
      .subscribe((res) => {
        this.couponApplied = res;
        if (this.couponApplied) {
          this.couponCode = this.couponApplied.couponId;
          this.couponDescription = this.couponApplied.couponDesc;
          this.couponDiscount = this.couponApplied.discount;
        }

      },
        (error) => {
          console.log("No coupons applied");
        }
      );
  }

  addToCart(itemSku: number) {

    // create a new transaction with item user added to cart
    const transaction = {
      storeId: 1,
      paymentId: 123,
      userId: Number(localStorage.getItem('userId')),
      status: "open",
      inventory: [{
        sku: itemSku
      }]
    }

    // call sales service to create the transaction if no open transaction already exists;
    // otherwise, the existing open transaction will be updated
    this.shopService.postObj(`${environment.shopUrl}${environment.postTransactionURI}`, transaction)
      .subscribe((res) => {
        this.modalService.dismissAll();

        this.loadCart(Number(localStorage.getItem('userId')));
      },
        (error) => {
          console.log(error);
        }
      );
  }

  removeItem(sku: number) {

    this.shopService.deleteObj(`${environment.shopUrl}${environment.deleteTransactionURI}${Number(localStorage.getItem('userId'))}/sku/${sku}`)
      .subscribe((res) => {
        this.loadCart(Number(localStorage.getItem('userId')));
      },
        (error) => {
          console.log(error);
        }
      );
  }

  addCouponCode(couponCode: number) {
    // create a new transaction with user's coupon code
    const transaction = {
      userId: Number(localStorage.getItem('userId')),
      coupons: [{
        couponId: couponCode
      }]
    }

    // call sales service to create the transaction if no open transaction already exists;
    // otherwise, the existing open transaction will be updated
    this.shopService.postObj(`${environment.shopUrl}${environment.postCouponURI}`, transaction)
      .subscribe((res) => {

        this.loadCoupon(Number(localStorage.getItem('userId')));
      },
        (error) => {
          this.couponCode = 0;
          this.couponDiscount = 0;
          this.loadCoupon(Number(localStorage.getItem('userId')));
        }
      );
  }

  checkout(totalTax: number, totalBill: number) {
    console.log("Checkout method, Tax: " + totalTax.toFixed(2) + ", Total: " + totalBill.toFixed(2));

    const values = {
      userId: Number(localStorage.getItem('userId')),
      tax: totalTax,
      total: totalBill
    }

    this.shopService.updateObj(`${environment.shopUrl}${environment.updateTransactionURI}`, values)
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

  logout() {
    return this.authService.logout();
  }

  searchInventory() {
    let searchString = this.searchInventoryForm.value.searchString;
    if (searchString.length != "") {
      this.shopService.getAll(
          `${environment.salesUrl}${environment.getInventoryURI}${searchString}`
        )
        .subscribe(
          (res) => {
            this.inventory = res;
            this.sku = this.inventory.sku;
            this.searchString = "";
          },
          (error) => {
            this.searchString = "";
            this.inventory = [];
            this.sku = "No SKU Matching Found."
            console.log("mistake");
          }
        );
    }else{
      this.inventory = [];
      this.sku = null;
      this.searchString = null;
    }
  }

}
