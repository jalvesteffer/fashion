import { Component, OnInit } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { PagerService } from "../../common/services/pager.service";
import { environment } from "../../../environments/environment";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  // transaction data
  transactions: any;
  totalTransactions: number;

  constructor(
    private shopService: ShopService,
    private pagerService: PagerService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loadAllTransactions();
  }

  loadAllTransactions() {
    this.shopService.getAll(`${environment.shopUrl}${environment.getTransactionURI}`)
      .subscribe((res) => {
        this.transactions = res;
        this.totalTransactions = this.transactions.length;
      },
        (error) => {
          throw new Error("Error in loadAllProducts().");
        }
      );
  }
}
