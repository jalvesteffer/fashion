import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServerService } from './server.service';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:8085";

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
      console.log('Logged in from memory');
      if(this.userRole == "CUSTOMER"){
        this.router.navigate(['/gcfashions/shop/myaccount']); 
      }
      // const user = JSON.parse(userData);
      // this.token = user.token;
      // this.server.setLoggedIn(true, this.token);
      // this.loggedIn.next(true);
      // this.router.navigate(['/gcfashions/shop/myaccount']);
    }
  }

  login(user) {
    console.log(user, user.username)
    if (user.username !== '' && user.password !== '' ) {
      return this.http.post(baseUrl+'/login', user, {observe:'response'}).subscribe((response: any) => {
        if (response.headers.get("Authorization")) {
          this.token = response.headers.get("Authorization");
          this.userId = response.headers.get("UserId");
          this.userRole = response.headers.get("UserRole");
          console.log(this.userId);
          this.server.setLoggedIn(true, this.token);
          this.loggedIn.next(true);
          const userData = {
            token: this.token
          };
          localStorage.setItem('user', JSON.stringify(userData));
          localStorage.setItem('userId', this.userId);
          localStorage.setItem('userRole', this.userRole);
          if(this.userRole == "CUSTOMER"){
           this.router.navigate(['/gcfashions/shop/myaccount']); 
          }
          
        }
      });
    }
  }

  logout() {
    this.server.setLoggedIn(false);
    delete this.token;

    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/gcfashions/shop/products']);
  }

}
