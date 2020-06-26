import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ShopService {

    constructor(private http: HttpClient) { }

    getAll(url) {
        return this.http.get(url);
    }

    deleteObj(url) {
        return this.http.delete(url);
    }

    //   updateObj(url, obj) {
    //     return this.http.put(url, obj);
    //   }

    postObj(url, obj) {
        return this.http.post(url, obj);
    }
}