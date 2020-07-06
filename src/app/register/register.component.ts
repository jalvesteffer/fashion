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

  //sort
  searchInventoryForm: FormGroup;
  searchString: string;

  // inventory data
  sku: number;
  size: string;
  inventory2: any;

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

  //cart item
  cartItems: any;

  constructor(
    private shopService: ShopService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.cartItems = [];
    this.initializeFormGroup();
    this.loadCart(Number(localStorage.getItem('userId')));
  }

  initializeFormGroup() {
    this.searchInventoryForm = new FormGroup({
      searchString: new FormControl(this.searchString),
    });

    this.cartDetailsForm = new FormGroup({
      cartNumItems: new FormControl(this.cartNumItems),
      cartProducts: new FormControl(this.cartProducts),
      sizeChoice: new FormControl([this.sizeChoice]),
      couponCode: new FormControl([this.couponCode]),
    });
  }

  loadCart(userId: number) {
    this.shopService.getAll(`${environment.shopUrl}${environment.getCartItemsURI}${userId}`)
      .subscribe((res) => {
        this.cartProducts = res;
        console.log(this.cartProducts +" in cart");
        this.cartNumItems = this.cartProducts.length;

        this.cartTotal = 0;
        let p = null;
        for (p of this.cartProducts) {
          this.cartTotal += p.price;
        }

        console.log("cart loaded");
      },
        (error) => {
          throw new Error("Error in loadCart()");
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
    console.log("added to cart");
    console.log(transaction);
  // call sales service to create the transaction if no open transaction already exists;
    // otherwise, the existing open transaction will be updated
    this.shopService.postObj(`${environment.shopUrl}${environment.postTransactionURI}`, transaction)
      .subscribe((res) => {
        // this.modalService.dismissAll();

        this.loadCart(Number(localStorage.getItem('userId')));
      },
        (error) => {
          console.log(error);
        }
      );
  }

  logout() {
    return this.authService.logout();
  }

  addItem(item) {
    this.cartItems.push(item);
  }

  searchInventory() {
    let searchString = this.searchInventoryForm.value.searchString;
    if (searchString.length != "") {
      this.shopService.getAll(
          `${environment.salesUrl}${environment.getInventoryURI}${searchString}`
        )
        .subscribe(
          (res) => {
            this.inventory2 = res;
            console.log(this.inventory2);
            this.sku = this.inventory2.sku;
            this.size = this.inventory2.size;
            this.searchString = "";
          },
          (error) => {
            this.searchString = "";
            this.inventory2 = [];
            console.log("mistake");
          }
        );
    }
  }

}
