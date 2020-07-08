import { CheckoutComponent } from './checkout.component';
import { ShopService } from "../../common/services/shop.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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

// mock modal reference class
export class MockNgbModalRef {
  result: Promise<any> = new Promise((resolve, reject) => resolve("x"));
}

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let service: ShopService;
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

    component = new CheckoutComponent(service);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
