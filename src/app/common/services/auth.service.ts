import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { ServerService } from './server.service';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://ec2-3-19-141-180.us-east-2.compute.amazonaws.com:8085";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;
  private userId: string;
  private userRole: string;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private server: ServerService, private http: HttpClient) {
    console.log('Auth Service');
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.token = user.token;
      this.server.setLoggedIn(true, this.token);
      this.loggedIn.next(true);

      console.log('Logged in from memory');
      if (this.userRole == "CUSTOMER") {
        this.router.navigate(['/gcfashions/shop/myaccount']);
      } else if (this.userRole == "SALES") {
        this.router.navigate(['/gcfashions/sales']);
      }
    }
  }

  login(user) {
    if (user.username !== '' && user.password !== '') {
      let res = this.http.post(baseUrl + '/login', user, { observe: 'response' }).subscribe((response: any) => {
        if (response.headers.get("Authorization")) {
          this.token = response.headers.get("Authorization");
          this.userId = response.headers.get("UserId");
          this.userRole = response.headers.get("UserRole");
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
          const userData = {
            token: this.token
          };
          localStorage.setItem('user', JSON.stringify(userData));
          localStorage.setItem('userId', this.userId);
          localStorage.setItem('userRole', this.userRole);
          if (this.userRole == "CUSTOMER") {
            this.router.navigate(['/gcfashions/shop/myaccount']);
          } else if (this.userRole == "SALES") {
            this.router.navigate(['/gcfashions/sales']);
          } else if (this.userRole == "MANAGEMENT") {
            this.router.navigate(['/gcfashions/dashboard']);
          }

          return res;
        } else {
          return new Error(status);
        }
      });
    } else {
      return new Error;
    }
  }

  logout() {
    this.server.setLoggedIn(false);
    delete this.token;

    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/gcfashions/home']);
  }

}
