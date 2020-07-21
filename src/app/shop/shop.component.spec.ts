import { ShopService } from "../common/services/shop.service";
import { ShopComponent } from './shop.component';
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
import { of, throwError } from 'rxjs';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let service: ShopService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopComponent ],
      imports: [
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

    component = new ShopComponent(service);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should load components and call life cycle methods", () => {
    spyOn(component, "loadAllProducts");
    component.ngOnInit();

    expect(component.loadAllProducts).toHaveBeenCalled;
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

  it("should error on null getAll value", () => {
    spyOn(service, "getAll").and.returnValue(throwError({ status: 404 }));
    component.ngOnInit();
    expect(service).toBeTruthy();

    expect(component.products).toBeUndefined();
  });

});
