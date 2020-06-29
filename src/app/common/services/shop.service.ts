import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ServerService } from './server.service';

@Injectable({
    providedIn: 'root'
})
export class ShopService {

    constructor(private http: ServerService) { }

    getAll(url) {
        return this.http.request('GET', url);
    }

    // deleteObj(url) {
    //     return this.http.delete(url);
    // }

    //   updateObj(url, obj) {
    //     return this.http.put(url, obj);
    //   }

    postObj(url, obj) {
        return this.http.request('POST', url, obj);
    }
}