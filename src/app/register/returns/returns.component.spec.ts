import { ShopService } from '../../common/services/shop.service';
import { PagerService } from '../../common/services/pager.service';
import { AuthService } from '../../common/services/auth.service';
import { of, throwError } from "rxjs";
import { ReturnsComponent } from './returns.component';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { resolve } from 'url';

// mock modal reference class
export class MockNgbModalRef {
  result: Promise<any> = new Promise((resolve, reject) => resolve("x"));
}

describe('ReturnsComponent', () => {
  let component: ReturnsComponent;
  let fixture: ComponentFixture<ReturnsComponent>;
  let service: ShopService;
  let authService: AuthService;
  let pagerService: PagerService;
  let modalService: NgbModal;
  let fb: FormBuilder;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnsComponent ],
      imports: [
        RouterTestingModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgMultiSelectDropDownModule,
        HttpClientTestingModule
      ],
      providers: [
        ShopService, PagerService
      ]
    })
    .compileComponents();
    service = new ShopService(null);
    pagerService = new PagerService();
    fb = new FormBuilder();
    modalService = TestBed.get(NgbModal);

    component = new ReturnsComponent(service, pagerService, fb, authService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsComponent);

    component.searchForm= fb.group({
      searchString: [""]
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should load components and call life cycle methods", () => {
    spyOn(component, "loadAllOpenTransactions");
    spyOn(component, "closeAlert");
    spyOn(component, "initializeFormGroup");
    component.ngOnInit();
    expect(component.loadAllOpenTransactions).toHaveBeenCalled;
    expect(component.closeAlert).toHaveBeenCalled;
    expect(component.initializeFormGroup).toHaveBeenCalled;
  });

  it("form should be created", () => {
    component.initializeFormGroup();
    expect(component.searchForm ).toBeTruthy;
  });

  // it("Alert should be opened", () => {
  //   spyOn(component,"alert");
  //   component.openAlert();
  //   expect(component).toBeTruthy;
  // });

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
    component.loadAllOpenTransactions();
    tick();
    expect(service).toBeTruthy();
    expect(mockTransactions).toEqual(component.transactions);
    expect(mockTransactions.length).toEqual(1);
  }));

  it("should error on null getAll value", fakeAsync(() => {
    spyOn(localStorage, 'getItem').and.returnValue(1);
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.loadAllOpenTransactions();
    expect(service).toBeTruthy();
    tick();
    expect(component.transactions).toBeUndefined;
  }));

  it("should be able to search", fakeAsync(() => {
    
      const mockTransactions = [
        {  "transactionId": 3,
        "storeId": 1,
        "paymentId": "111",
        "userId": 1,
        "status": "complete",
        "total": 120.0,
        "tax": 10.0,
        }
      ];

    component.searchForm.value.searchString = '1';
    spyOn(service, "getAll").and.returnValue(of(mockTransactions));
    spyOn(component, "setPage");
    expect(service).toBeTruthy();
    component.search();
    tick();
    expect(component.transactions).toEqual(mockTransactions);
    expect(mockTransactions.length).toEqual(1);
  }));

  it("should error on null getAll value when searching", fakeAsync(() => {
    component.searchForm.value.searchString = '1';
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.search();
    expect(service).toBeTruthy();
    tick();
    expect(component.transactions).toEqual([]);
    expect(component.totalTransactions).toEqual(0);
  }));
});
