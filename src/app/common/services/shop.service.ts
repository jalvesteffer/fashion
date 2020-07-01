import { Injectable } from "@angular/core";
import { ServerService } from "./server.service";

@Injectable({
  providedIn: "root",
})
export class ShopService {
  constructor(private server: ServerService) {}

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
