import { AccountComponent } from './account.component';
import { ShopService } from "../../common/services/shop.service";
import { AuthService } from "../../common/services/auth.service";
import { PagerService } from "../../common/services/pager.service";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

// mock modal reference class
export class MockNgbModalRef {
  result: Promise<any> = new Promise((resolve, reject) => resolve("x"));
}

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  let service: ShopService;
  let serviceAuth: AuthService;
  let pagerService: PagerService;
  let modalService: NgbModal;
  let fb: FormBuilder;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();
  let http: HttpClient;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports: [
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        ShopService, 
        AuthService, 
        PagerService,
        { provide: Router, useValue: {urls: "/path"} },
      ]
    })
    .compileComponents();
    service = new ShopService(null);
    serviceAuth = new AuthService(null, null, null);
    pagerService = new PagerService();
    fb = new FormBuilder();
    modalService = TestBed.get(NgbModal);

    component = new AccountComponent(service, pagerService, serviceAuth, modalService, fb);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should load components and call life cycle methods", fakeAsync(() => {
    spyOn(component, "loadAllTransactions");
    component.ngOnInit();
    tick();

    expect(component.loadAllTransactions).toHaveBeenCalled;
  }));

  it("should be able to post coupon", fakeAsync(() => {
    const mockTransactions = [
    {  "transactionId": 3,
    "storeId": 1,
    "paymentId": "111",
    "userId": 1,
    "status": "complete",
    "total": 120.0,
    "tax": 10.0,
    "inventory": [
        {
            "sku": 2,
            "productId": 2,
            "qty": 5,
            "size": "m"
        }
    ],
    "coupons": [
        {
            "couponId": 1,
            "productId": null,
            "productType": null,
            "appliesTo": "total",
            "discount": 0.1,
            "couponDesc": "Take 10% off your entire order for  a limited time."
        }
    ],
    "store": {
        "storeId": 1,
        "location": "Website"
    },
    "user": {
        "userId": 1,
        "cardNo": 1.234567890123456E15,
        "username": "jdoe",
        "password": "$2a$10$K53Qg9bT.zrOo6dfIlUA9udm/jCBTF41xSEByS4dvDgPy8ZrWc/4S",
        "role": "CUSTOMER",
        "fullName": "John Doe",
        "address": "Fairfax, VA"
    }
    }
    ];
    spyOn(localStorage, 'getItem').and.returnValue(1);
    spyOn(service, "getAll").and.returnValue(of(mockTransactions));
    component.loadAllTransactions();
    tick();
    expect(service).toBeTruthy();
    expect(mockTransactions).toEqual(component.transactions);
    expect(mockTransactions.length).toEqual(1);
  }));

  it("should error on null getAll value", fakeAsync(() => {
    spyOn(localStorage, 'getItem').and.returnValue(1);
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.loadAllTransactions();
    expect(service).toBeTruthy();
    tick();
    expect(component.transactions).toBeUndefined;
  }));

  it("should handle page size of 0", () => {
    component.pager.totalTransactions = 1;
    component.setPage(0);
    expect(service).toBeTruthy();
  });

  it("should logout", () => {
    spyOn(serviceAuth, 'logout');
    component.logout();
    expect(service).toBeTruthy();
  });
});
