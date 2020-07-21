import { CheckoutComponent } from './checkout.component';
import { ShopService } from "../../common/services/shop.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators, NgModel } from "@angular/forms";
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
import { of, throwError } from 'rxjs';

// mock modal reference class
export class MockNgbModalRef {
  result: Promise<any> = new Promise((resolve, reject) => resolve("x"));
}

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let service: ShopService;
  let fb: FormBuilder;
  let modalService: NgbModal;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      imports: [
        NgbModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        ShopService
      ]

    })
    .compileComponents();
    service = new ShopService(null);
    modalService = TestBed.get(NgbModal);
    fb = new FormBuilder();

    component = new CheckoutComponent(service);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);

    component.checkoutForm = fb.group({
      cardHolderName: [""],
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should load components and call life cycle methods", () => {
    spyOn(component, "getTransactionDetails");
    spyOn(component, "initializeFormGroup");
    component.ngOnInit();
    expect(component.getTransactionDetails).toHaveBeenCalled;
    expect(component.initializeFormGroup).toHaveBeenCalled;
  });

  it("form should be created", () => {
    component.initializeFormGroup();
    expect(component.checkoutForm ).toBeTruthy;
  });

  it("form should be created", () => {
    component.initializeFormGroup();
    expect(component.checkoutForm ).toBeTruthy;
  });

  // it("should be able to get transaction details", fakeAsync(() => {
  //   const mockTransactions = [
  //   {  "transactionId": 3,
  //   "storeId": 1,
  //   "paymentId": "111",
  //   "userId": 1,
  //   "status": "open",
  //   "total": 120.0,
  //   "tax": 10.0,
  //   "inventory": [],
  //   "user": {
  //       "userId": 1,
  //       "cardNo": 1.234567890123456E15,
  //       "username": "jdoe",
  //       "password": "$2a$10$K53Qg9bT.zrOo6dfIlUA9udm/jCBTF41xSEByS4dvDgPy8ZrWc/4S",
  //       "role": "CUSTOMER",
  //       "fullName": "John Doe",
  //       "address": "Fairfax, VA"
  //   }
  //   }
  //   ];
  //   spyOn(localStorage, 'getItem').and.returnValue(1);
  //   spyOn(service, "getAll").and.returnValue(of(mockTransactions));
  //   component.getTransactionDetails();
  //   tick();
  //   expect(service).toBeTruthy();
  //   expect(mockTransactions).toEqual(component.openTransaction);
  //   expect(mockTransactions.length).toEqual(1);
  // }));

  it("should error on null getAll value", () => {
    spyOn(localStorage, 'getItem').and.returnValue(1);
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.getTransactionDetails();
    expect(service).toBeTruthy();
    expect(component.openTransaction).toBeUndefined;
  });
});
