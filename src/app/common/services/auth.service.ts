import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { ServerService } from "./server.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;
  private userId: string;
  private userRole: string;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private server: ServerService,
    private http: HttpClient
  ) {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      this.token = user.token;
      this.server.setLoggedIn(true, this.token);
      this.loggedIn.next(true);
    }
  }

  login(user) {
    if (user.username !== "" && user.password !== "") {
      return this.http
        .post("http://localhost:8085/login", user, { observe: "response" })
        .subscribe((response: any) => {
          if (response.headers.get("Authorization")) {
            this.token = response.headers.get("Authorization");
            this.userId = response.headers.get("UserId");
            this.userRole = response.headers.get("UserRole");
            this.server.setLoggedIn(true, this.token);
            this.loggedIn.next(true);
            const userData = {
              token: this.token,
            };
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("userId", this.userId);
            localStorage.setItem("userRole", this.userRole);
            this.router.navigate(["/gcfashions/shop/products"]);
          }
        });
    }
  }

  logout() {
    this.server.setLoggedIn(false);
    delete this.token;
    this.loggedIn.next(false);
    localStorage.clear();
    this.router.navigate(["/gcfashions/home"]);
  }
}