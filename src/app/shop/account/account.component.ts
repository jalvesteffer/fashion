import { Component, OnInit } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { AuthService } from "../../common/services/auth.service";
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

  //user
  user: any;

  // pagination
  pager: any = {};
  pagedTransaction: any[];
  pageSize: number = 4;

  constructor(
    private shopService: ShopService,
    private pagerService: PagerService,
    private authService: AuthService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loadAllTransactions();
  }

  loadAllTransactions() {
    const userData = localStorage.getItem('userId');
    this.shopService.getAll(`${environment.shopUrl}${environment.getUserURI}${userData}${environment.getUserTransactionsURI}`)
      .subscribe((res) => {
        this.transactions = res;
        this.user = res[0].user
        this.totalTransactions = this.transactions.length;
        console.log(this.transactions);
        this.setPage(1);
      },
        (error) => {
          throw new Error("Error in loadAllProducts().");
        }
      );
  }

  logout(){
    return this.authService.logout();
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalTransactions) {
      return;
    }
    this.pager = this.pagerService.getPager(this.totalTransactions, page, this.pageSize);
    this.pagedTransaction = this.transactions.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
}
