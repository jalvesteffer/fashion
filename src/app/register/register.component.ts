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

  constructor(
    private shopService: ShopService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.searchInventoryForm = new FormGroup({
      searchString: new FormControl(this.searchString),
    });
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
            console.log("mistake");
          }
        );
    }
  }

}
