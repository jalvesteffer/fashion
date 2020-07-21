import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const baseUrl = "";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private loggedIn = false;
  private token: string;

  constructor(private http: HttpClient) {}

  setLoggedIn(loggedIn: boolean, token?: string) {
    this.loggedIn = loggedIn;
    this.token = token;
  }

  request(method: string, route: string, data?: any) {
    if (method === 'GET') {
      console.log("get", route, data);
      return this.get(route, data);
    }

    const header = (this.loggedIn) ? { Authorization: `${this.token}` } : undefined;
    console.log(header, `${this.token}`)

    return this.http.request(method, baseUrl + route, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: header
    });
  }

  get(route: string, data?: any) {
    const header = (this.loggedIn) ? { Authorization: `${this.token}` } : undefined;
    console.log(header, `${this.token}`)

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    console.log("http get", baseUrl + route)
    return this.http.get(baseUrl + route, {
      responseType: 'json',
      headers: header,
      params
    });
  }
}
