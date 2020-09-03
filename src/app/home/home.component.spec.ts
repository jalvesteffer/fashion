import { HomeComponent } from './home.component';
import { FormBuilder, FormGroup, FormControl, FormsModule, Validators, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../common/services/auth.service';
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
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../common/services/server.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  let service: AuthService;
  let serviceSer: ServerService;
  let fb: FormBuilder;
  let form: FormGroup;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        AuthService,
        { provide: Router, useValue: {urls: "/path"} },
      ]
    })
    .compileComponents();
    service = new AuthService(router, serviceSer, http);
    fb = new FormBuilder();
    form = fb.group({
      username: [''],
      password: ['']
    });
    component = new HomeComponent(fb, service, router);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    form = fb.group({
      username: [''],
      password: ['']
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should load components and call life cycle methods", () => {
    spyOn(component, "initializeFormGroup");
    component.ngOnInit();

    expect(component.initializeFormGroup).toHaveBeenCalled;
  });

  // it("should check local storage for token", () => {
  //   const mockLocalStorage =
  //   [
  //     {"user":"token"}
  //   ]
  //   spyOn(localStorage, "getItem").and.returnValue(mockLocalStorage);
  //   component.ngOnInit();
  //   tick();
  //   expect(localStorage.getItem).toHaveBeenCalled;
  // });

  it("form invalid when empty", fakeAsync(() => {
    component.initializeFormGroup();
    component.onSubmit();
    tick();
    expect(component.formSubmitAttempt).toBeTruthy;
  }));

  it("form to be valid when not empty", fakeAsync(() => {
    component.initializeFormGroup();
    component.form.controls.username.setValue('user');
    component.form.controls.password.setValue('');
    component.onSubmit();
    tick();
    expect(component.formSubmitAttempt).toBeTruthy;
  }));
  
  
});
