import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('alert', {}) alert: ElementRef;
  message: string = "No Message";

  form: FormGroup;
  public loginInvalid: boolean;
  public formSubmitAttempt: boolean;

  //user form
  registrationForm: FormGroup;
  private username: string;
  private password: string;
  private name: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initializeFormGroup();
    this.closeAlert();

    // subscribe to login failure events so that an error alert
    // can be displayed
    this.authService.messageEvent.subscribe(res => {
      this.loginInvalid = true;
      this.openAlert();
      this.message = res;
    });

    if (localStorage.getItem('user') != null) {
      console.log('Logged in from memory');
      this.router.navigate(['/gcfashions/shop/myaccount']);
    }
  }

  initializeFormGroup() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

  openAlert() {
    this.alert.nativeElement.classList.add('show');
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;

    // make sure username and password fields are not blank
    if (this.form.valid) {
      // call login service with object containing username/password as argument
      this.authService.login(this.form.value);
    }
    // otherwise, display an error alert
    else {
      this.formSubmitAttempt = true;
      this.loginInvalid = true;
      this.message = "Username and Password can not be blank.";
      this.openAlert();
    }
  }
}
