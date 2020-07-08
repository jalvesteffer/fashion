import { AccountComponent } from './account.component';
import { ShopService } from "../../common/services/shop.service";
import { AuthService } from "../../common/services/auth.service";
import { PagerService } from "../../common/services/pager.service";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
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
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComponent ],
      imports: [
        HttpClientTestingModule,
        NgbModule,
        Router
      ],
      providers: [
        ShopService, 
        AuthService, 
        PagerService,
        { provide: Router, useValue: mockRouter },
      ]
    })
    .compileComponents();
    service = new ShopService(null);
    serviceAuth = new AuthService(null, null, http);
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
});
