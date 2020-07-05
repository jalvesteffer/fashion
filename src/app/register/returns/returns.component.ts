import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { environment } from "../../../environments/environment";
import { PagerService } from "../../common/services/pager.service";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {
  @ViewChild('alert', {}) alert: ElementRef;

  headerText: string = "In-Store Returns";
  headerImage: string = "instore-returns-start";
  message: string = "No Message";

  // transactions data
  transactions: any;
  totalTransactions: number;

  // pagination
  pager: any = {};
  pagedTransactions: any[];
  pageSize: number = 5;

  // Sort
  searchForm: FormGroup;
  searchString: string;

  constructor(
    private shopService: ShopService,
    private pagerService: PagerService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loadAllOpenTransactions();
    this.initializeFormGroup();
    this.closeAlert();
  }

  initializeFormGroup() {
    this.searchForm = new FormGroup({
      searchString: new FormControl(this.searchString),
    });
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

  openAlert() {
    this.alert.nativeElement.classList.add('show');
  }

  search() {
    let searchString = this.searchForm.value.searchString;
    if (searchString.length != 0) {
      this.shopService.getAll(
        `${environment.salesUrl}${environment.getCompleteTransactionsLikeURI}${searchString}`
      )
        .subscribe(
          (res) => {
            console.log("res");
            this.transactions = res;
            if (this.transactions) {
              this.totalTransactions = this.transactions.length;
            } else {
              this.totalTransactions = 0;
              this.transactions = [];
            }

            this.searchString = "";
            this.setPage(1);
          },
          (error) => {
            console.log("err");
            this.searchString = "";
            this.transactions = [];
            this.totalTransactions = 0;
            this.setPage(1);
          }
        );
    } else {
      this.searchString = "";
      this.loadAllOpenTransactions();
    }
  }

  loadAllOpenTransactions() {
    this.shopService.getAll(`${environment.salesUrl}${environment.getAllCompleteTransactionsURI}`)
      .subscribe((res) => {
        this.transactions = res;
        this.totalTransactions = this.transactions.length;
        this.setPage(1);
      },
        (error) => {
          console.log("Error in loadAllOpenTransactions()");
        }
      );
  }

  refund(transaction) {
    console.log("Refund transactionId initiated: " + transaction.transactionId);

    // package transactionId in JSON format
    const transactionIdObj = {
      transactionId: transaction.transactionId
    }

    this.shopService.updateObj(`${environment.salesUrl}${environment.instoreRefundURI}`, transactionIdObj)
      .subscribe((res) => {
        this.loadAllOpenTransactions();
        this.setPage(1);
        this.message = "Order Number " + transaction.transactionId + " for " + transaction.user.username + " has been refunded " + "$" + transaction.total.toFixed(2);
        this.openAlert();
      },
        (error) => {
          console.log("Error in refund()");
        }
      );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalTransactions) {
      return;
    }
    this.pager = this.pagerService.getPager(this.totalTransactions, page, this.pageSize);
    this.pagedTransactions = this.transactions.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

}
