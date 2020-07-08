import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    this.initializeFormGroup()

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

    // this.registrationForm = new FormGroup({
    //   username: new FormControl(this.username),
    //   password: new FormControl(this.password),
    //   name: new FormControl(this.name),

    // });
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        await this.authService.login(this.form.value);      
      } catch (err) {
        this.loginInvalid = true;
        console.log("this" + this.loginInvalid);
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

}
