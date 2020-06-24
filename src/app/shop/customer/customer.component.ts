import { Component, OnInit } from '@angular/core';
import { ShopService } from "../../common/services/shop.service";
import { environment } from "../../../environments/environment";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  user: any;
  loginForm: FormGroup;
  username: string;
  password: string;
  token: string;

  constructor(
    private shopService: ShopService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    ) { }

    ngOnInit() {
      // this.loadUser();
      this.initializeFormGroup();
    }

    initializeFormGroup() {
      this.loginForm = new FormGroup({
        username: new FormControl(this.username),
        password: new FormControl(this.password),
      });
    }
  
    loadUser() {
      this.shopService.getAll(`${environment.shopUrl}${environment.getUserURI}${1}`)
        .subscribe((res) => {
          this.user = res;
        },
          (error) => {
            throw new Error("Error in loadUser().");
          }
        );
    }

}
