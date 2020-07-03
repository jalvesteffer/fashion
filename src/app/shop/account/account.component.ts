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

  //user data
  username: string;
  fullName: string;
  address: string;

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

  async ngOnInit() {
    await this.loadAllTransactions();
  }

  async loadAllTransactions() {
    const userData = localStorage.getItem('userId');
    return this.shopService.getAll(`${environment.baseUrl}${environment.getUserURI}${userData}${environment.getUserTransactionsURI}`)
      .subscribe((res) => {
        this.transactions = res;
        let user = this.transactions[0].user;
        this.username = user.username;
        this.fullName = user.fullName;
        this.address = user.address;
        this.totalTransactions = this.transactions.length;
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
