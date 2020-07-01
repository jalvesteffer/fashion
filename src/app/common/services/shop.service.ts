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

    deleteObj(url) {
        return this.http.request('DELETE', url);
    }

    updateObj(url, obj) {
        return this.http.request('PUT', url, obj);
    }

    postObj(url, obj) {
        return this.http.request('POST', url, obj);
    }
}