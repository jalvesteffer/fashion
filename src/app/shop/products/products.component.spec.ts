import { ProductsComponent } from './products.component';
import { ShopService } from "../../common/services/shop.service";
import { PagerService } from "../../common/services/pager.service";
import { environment } from "../../../environments/environment";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

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
import { NOTFOUND } from 'dns';
import { variable } from '@angular/compiler/src/output/output_ast';

// mock modal reference class
export class MockNgbModalRef {
  result: Promise<any> = new Promise((resolve, reject) => resolve("x"));
}

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let service: ShopService;
  let pagerService: PagerService;
  let modalService: NgbModal;
  let fb: FormBuilder;
  let router: Router;
  let mockModalRef: MockNgbModalRef = new MockNgbModalRef();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        ShopService, 
        PagerService,
        { provide: Router, useValue: {urls: "/path"} },
      ]
    })
    .compileComponents();
    service = new ShopService(null);
    pagerService = new PagerService();
    fb = new FormBuilder();
    modalService = TestBed.get(NgbModal);

    component = new ProductsComponent(service, pagerService, modalService, fb, router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);

    component.searchProductForm = fb.group({
      searchString: [""]
    });

    component.productDetailsForm = fb.group({
      productName: [""],
      description: [""],
      photo: [""],
      price: [""],
      inventory: [""],
      sizeChoice: [""],
      productId: [""],
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should load components and call life cycle methods", () => {
    spyOn(component, "loadAllProducts");
    spyOn(component, "loadAllCategories");
    spyOn(component, "loadCart");
    spyOn(component, "initializeFormGroup");
    component.ngOnInit();
    expect(component.loadAllProducts).toHaveBeenCalled;
    expect(component.loadAllCategories).toHaveBeenCalled;
    expect(component.loadCart).toHaveBeenCalled;
    expect(component.initializeFormGroup).toHaveBeenCalled;
  });

  it("form should be created", () => {
    component.initializeFormGroup();
    expect(component.productDetailsForm).toBeTruthy;
  });

  it("should load all products via a mock-service - return mock data", () => {
    const mockProducts = [
      {
      "productId": 1,
      "productName": "Wide neck T-Shirt",
      "gender": "f",
      "description": "The wide neckline of this t-shirt makes it look like an off-shoulder top. ",
      "photo": "1",
      "catId": 2,
      "subcatId": 2,
      "price": 1.0,
      "inventory": [
          {
              "sku": 4,
              "productId": 1,
              "qty": 29,
              "size": "s"
          }
      ]
  },
  {
      "productId": 2,
      "productName": "Boyfriend t-shirt",
      "gender": "f",
      "description": "Very loose t-shirts as opposed to body fitting t-shirts.",
      "photo": "2",
      "catId": 2,
      "subcatId": 2,
      "price": 1.0,
      "inventory": [
          {
              "sku": 1,
              "productId": 2,
              "qty": 10,
              "size": "s"
          }
      ]
  },
    ];

    spyOn(service, "getAll").and.returnValue(of(mockProducts));
    component.loadAllProducts();
    expect(service).toBeTruthy();
    expect(component.products).toEqual(mockProducts);
    expect(component.products.length).toEqual(2)
  });

  it("should error on null getAll value when loading all products", () => {
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.loadAllProducts();
    expect(service).toBeTruthy();
    
    expect(component.products).toBeUndefined();
  });

  it("should load all Categories via a mock-service - return mock data", () => {
    const mockCategories = [
      {
        "catId": 1,
        "catName": "skirts",
        "catDesc": "Fash Sale",
        "subcategories": [],
        "products": []
    },
    {
        "catId": 2,
        "catName": "pants",
        "catDesc": "Sale",
        "subcategories": [],
        "products": []
    }
    ];

    spyOn(service, "getAll").and.returnValue(of(mockCategories));
    component.loadAllCategories();
    expect(service).toBeTruthy();
    expect(component.categories).toEqual(mockCategories);
    expect(component.categories.length).toEqual(2)
  });

  it("should error on null getAll categories value", () => {
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.loadAllCategories();
    expect(service).toBeTruthy();
    
    expect(component.categories).toBeUndefined();
  });

  it("should load products by categories via a mock-service - return mock data", () => {
    const mockProducts = [
      {
      "productId": 1,
      "productName": "Wide neck T-Shirt",
      "gender": "f",
      "description": "The wide neckline of this t-shirt makes it look like an off-shoulder top. ",
      "photo": "1",
      "catId": 2,
      "subcatId": 2,
      "price": 1.0,
      "inventory": [
          {
              "sku": 4,
              "productId": 1,
              "qty": 29,
              "size": "s"
          }
      ]
  },
  {
      "productId": 2,
      "productName": "Boyfriend t-shirt",
      "gender": "f",
      "description": "Very loose t-shirts as opposed to body fitting t-shirts.",
      "photo": "2",
      "catId": 2,
      "subcatId": 2,
      "price": 1.0,
      "inventory": [
          {
              "sku": 1,
              "productId": 2,
              "qty": 10,
              "size": "s"
          }
      ]
  },
    ];

    spyOn(service, "getAll").and.returnValue(of(mockProducts));
    component.loadProductsByCategory(2);
    expect(service).toBeTruthy();
    expect(component.products).toEqual(mockProducts);
    expect(component.products.length).toEqual(2)
  });

  it("should error on null getAll value when Products By Category", () => {
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.loadProductsByCategory(2);
    expect(service).toBeTruthy();
    expect(component.products).toEqual([]);
    expect(component.totalProducts).toEqual(0);
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

  it("should load products by cat and subcat id via a mock-service - return mock data", () => {
    const mockProducts = [
      {
        "productId": 1,
        "productName": "Wide neck T-Shirt",
        "gender": "f",
        "description": "The wide neckline of this t-shirt makes it look like an off-shoulder top. ",
        "photo": "1",
        "catId": 2,
        "subcatId": 2,
        "price": 1.0,
        "inventory": [
            {
                "sku": 4,
                "productId": 1,
                "qty": 29,
                "size": "s"
            },
            {
                "sku": 5,
                "productId": 1,
                "qty": 2,
                "size": "m"
            },
            {
                "sku": 6,
                "productId": 1,
                "qty": 4,
                "size": "l"
            }
        ]
    }
    ];

    spyOn(service, "getAll").and.returnValue(of(mockProducts));
    component.loadProductsBySubCategory(2,1,"Wide neck T-Shirt");
    expect(service).toBeTruthy();
    expect(component.products).toEqual(mockProducts);
  });

  it("should error on null getAll value when Products By SubCategory", () => {
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.loadProductsBySubCategory(2,1,"Wide neck T-Shirt");
    expect(service).toBeTruthy();
    expect(component.products).toEqual([]);
    expect(component.totalProducts).toEqual(0);
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

    component.searchProductForm.value.searchString = 'T-Shirt';
    spyOn(service, "getAll").and.returnValue(of(mockProducts));
    spyOn(component, "setPage");
    expect(service).toBeTruthy();
    component.searchProducts();
    tick();
    expect(mockProducts.length).toEqual(1);
  }));

  it("should error on null getAll value when searching products", fakeAsync(() => {
    component.searchProductForm.value.searchString = 'T-Shirt';
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.searchProducts();
    expect(service).toBeTruthy();
    tick();
    expect(component.products).toEqual([]);
    expect(component.totalProducts).toEqual(0);
  }));

  // it("should be able to post coupon", () => {
  //   spyOn(localStorage, 'getItem').and.returnValue(1);
  //   const mockTransactions = [
  //     {status: 200} 
  //   ];

  //   spyOn(service, "postObj").and.returnValue(of(mockTransactions));
  //   component.addCouponCode(1);
  //   expect(service).toBeTruthy();
  // });

  // it("should be able to removeItem", () => {
  //   spyOn(localStorage, 'getItem').and.returnValue(1);
  //   spyOn(component, 'loadCart');
    
  //   const mockRes = [
  //     {status: 200} 
  //   ];

  //   spyOn(service, 'deleteObj').and.returnValue(of(mockRes));
  //   component.removeItem(1);
  //   expect(service).toBeTruthy();
  // });

  // it("should handle page size of 0", () => {
  //   component.pager.totalProducts = 1;
  //   component.setPage(0);
  //   expect(service).toBeTruthy();
  // });

  // it("should open a modal window", fakeAsync(() => {
  //   const mockProduct =
  //     {
  //       "productName": "name",
  //       "description": "desc",
  //       "photo": "1",
  //       "price": 1,
  //       "inventory": [""],
  //       "sizeChoice": "s",
  //       "productId": 1
  //     };

  //   spyOn(modalService, "open").and.returnValue(mockModalRef);
  //   component.open("productDetailsModal", mockProduct);
  //   expect(service).toBeTruthy();
  // }));

  // it("should open a modal window for create", fakeAsync(() => {
  //   const mock =
  //   {
  //     "productName": "name",
  //     "description": "desc",
  //     "photo": "1",
  //     "price": 1,
  //     "inventory": [""],
  //     "sizeChoice": "s",
  //     "productId": 1
  //   };

  //   spyOn(modalService, "open").and.returnValue(mockModalRef);
  //   component.open("productDetailsModal", null);
  //   expect(service).toBeTruthy();
  // }));

  // it("should close a modal window", fakeAsync(() => {
  //   const mock =
  //   {
  //     "productName": "name",
  //     "description": "desc",
  //     "photo": "1",
  //     "price": 1,
  //     "inventory": [""],
  //     "sizeChoice": "s",
  //     "productId": 1
  //   };

  //   spyOn(modalService, "open").and.returnValue(mockModalRef);
  //   mockModalRef.result = new Promise((resolve, reject) => reject("error"));
  //   component.open("productDetailsModal", mock);
  //   tick();
  //   expect(component.closeResult).toBe("Dismissed");
  // }));
});
