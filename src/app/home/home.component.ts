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

    // if (localStorage.getItem('user') != null) {
    //   console.log('Logged in from memory');
    //   this.router.navigate(['/gcfashions/shop/myaccount']);
    // }
  }

  initializeFormGroup() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // this.registrationForm = new FormGroup({
    //   username: new FormControl(this.username),
    //   password: new FormControl(this.password),
    //   name: new FormControl(this.name),

    // });
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
    if (this.form.valid) {
      if (this.authService.login(this.form.value)){

      }else{
        this.loginInvalid = true;
        this.message = "Username or Password is incorrect";
        this.openAlert();
      }
    } else {
      this.formSubmitAttempt = true;
      this.loginInvalid = true;
        this.message = "Username and Password can not be blank.";
        this.openAlert();
    }
  }
}
