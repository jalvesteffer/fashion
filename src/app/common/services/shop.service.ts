import { Injectable } from "@angular/core";
import { ServerService } from "./server.service";

@Injectable({
  providedIn: "root",
})
export class ShopService {
  constructor(private server: ServerService) {}

<<<<<<< HEAD
  getAll(url) {
    return this.server.request("GET", url);
  }
  deleteObj(url) {
    return this.server.request("DELETE", url);
  }
  updateObj(url, obj) {
    return this.server.request("PUT", url, obj);
  }
  postObj(url, obj) {
    return this.server.request("POST", url, obj);
  }
}
=======
    constructor(private http: ServerService) { }

    getAll(url) {
        return this.http.request('GET', url);
    }

    // deleteObj(url) {
    //     return this.http.delete(url);
    // }

    updateObj(url, obj) {
        return this.http.put(url, obj);
    }

    postObj(url, obj) {
        return this.http.request('POST', url, obj);
    }
}
>>>>>>> 47a6e3b1ebde12abfa62acf67f8cfc2cf9ed9195
