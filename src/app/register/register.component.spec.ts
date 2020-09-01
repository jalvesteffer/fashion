import { RegisterComponent } from './register.component';
import { ShopService } from "../common/services/shop.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
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
  HttpTestingController,
} from "@angular/common/http/testing";
import { resolve } from 'url';
import { AuthService } from '../common/services/auth.service';
import { throwError, of } from 'rxjs';

// mock modal reference class
export class MockNgbModalRef {
  result: Promise<any> = new Promise((resolve, reject) => resolve("x"));
}

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let service: ShopService;
  let serviceAuth: AuthService;
  let modalService: NgbModal;
  let fb: FormBuilder;
  let router: Router;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        RouterTestingModule,
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        ShopService,
        // { provide: Router, useValue: {urls: "/path"} },
      ]
    })
    .compileComponents();
    service = new ShopService(null);
    serviceAuth = new AuthService(null, null, null);
    fb = new FormBuilder();
    modalService = TestBed.get(NgbModal);

    component = new RegisterComponent(service, serviceAuth, modalService, router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);

    component.cartDetailsForm = fb.group({
      cartNumItems: [""],
      cartProducts: [""],
      sizeChoice: [""],
      couponCode: [""],
    });

    component.searchInventoryForm = fb.group({
      searchString: [""]
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should load components and call life cycle methods", () => {
    spyOn(localStorage, 'getItem').and.returnValue(1);
    spyOn(component, "loadCart");
    spyOn(component, "initializeFormGroup");
    component.ngOnInit();
    expect(component.loadCart).toHaveBeenCalled;
    expect(component.initializeFormGroup).toHaveBeenCalled;
  });

  it("should load components and call life cycle methods", () => {
    component.initializeFormGroup();
    expect(component.initializeFormGroup).toBeTruthy;
  });

  it("should load cart products by user id via a mock-service - return mock data", () => {
    const mockProducts = [
      {
        "productId": 2,
        "productName": "Boyfriend t-shirt",
        "gender": null,
        "description": null,
        "photo": "2",
        "catId": null,
        "subcatId": null,
        "price": 1.0,
        "inventory": [
            {
                "sku": 2,
                "productId": 2,
                "qty": 1,
                "size": "m"
            }
        ]
    },
    {
        "productId": 1,
        "productName": "Wide neck T-Shirt",
        "gender": null,
        "description": null,
        "photo": "1",
        "catId": null,
        "subcatId": null,
        "price": 1.0,
        "inventory": [
            {
                "sku": 4,
                "productId": 1,
                "qty": 1,
                "size": "s"
            }
        ]
    }
    ];

    spyOn(service, "getAll").and.returnValue(of(mockProducts));
    component.loadCart(1);
    expect(service).toBeTruthy();
    expect(component.cartProducts).toEqual(mockProducts);
    expect(component.cartProducts.length).toEqual(2)
  });

  it("should error on null getAll value when loading cart", () => {
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.loadCart(2);
    expect(service).toBeTruthy();
    expect(component.cartProducts).toEqual([]);
  });

  it("should load cart coupons by user id via a mock-service - return mock data", () => {
    const mockCoupons = [
      {
        "couponId": 1,
        "productId": null,
        "productType": null,
        "appliesTo": "total",
        "discount": 0.1,
        "couponDesc": "Take 10% off your entire order for  a limited time."
    }
    ];

    spyOn(service, "getAll").and.returnValue(of(mockCoupons));
    component.loadCoupon(1);
    expect(service).toBeTruthy();
    expect(component.couponApplied).toEqual(mockCoupons);
  });

  it("should error on null getAll value when loading coupons", () => {
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.loadCoupon(2);
    expect(service).toBeTruthy();
    expect(component.couponApplied).toBeUndefined;
  });

  it("should logout", () => {
    spyOn(serviceAuth, 'logout');
    component.logout();
    expect(service).toBeTruthy();
  });

  it("should be able to search", fakeAsync(() => {
    const mockProducts = [
      {
        "productId": 1,
        "productName": "Wide neck T-Shirt",
        "gender": "f",
        "description": "The wide neckline of this t-shirt makes it look like an off-shoulder top. ",
        "photo": "1",
        "catId": 2,
        "subcatId": 2,
        "price": 1.0
    }
    ];

    component.searchInventoryForm.value.searchString = '1';
    spyOn(service, "getAll").and.returnValue(of(mockProducts));
    expect(service).toBeTruthy();
    component.searchInventory();
    tick();
    expect(mockProducts.length).toEqual(1);
  }));

  it("should error on null getAll value when searching products", fakeAsync(() => {
    component.searchInventoryForm.value.searchString = '1';
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.searchInventory();
    expect(service).toBeTruthy();
    tick();
    expect(component.inventory).toEqual([]);
    expect(component.sku).toEqual("No SKU Matching Found.");
  }));

  // it("should be able to post add to cart", () => {
  //   spyOn(localStorage, 'getItem').and.returnValue(1);
  //   const mockTransactions = [
  //     {status: 200} 
  //   ];
    
  //   spyOn(service, "postObj").and.returnValue(of(mockTransactions));
  //   component.addToCart(1);
  //   expect(service).toBeTruthy();
  // });

});
