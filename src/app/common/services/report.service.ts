import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  salesReport() {
    return this.http.get("http://localhost:8083/gcfashions/accountant/reports/sales");
  }

  taxReport() {
    return this.http.get("http://localhost:8083/gcfashions/accountant/reports/taxes");
  }

  salesByCatReport() {
    return this.http.get("http://localhost:8083/gcfashions/accountant/reports/salesbycat");
  }

  totalSalesReport() {
    return this.http.get("http://localhost:8083/gcfashions/accountant/reports/totalsales");
  }

  totalTaxReport() {
    return this.http.get("http://localhost:8083/gcfashions/accountant/reports/totaltaxes");
  }

  avgSalesPerDay() {
    return this.http.get("http://localhost:8083/gcfashions/accountant/reports/salesperday");
  }

  avgSalesPerTrans() {
    return this.http.get("http://localhost:8083/gcfashions/accountant/reports/salespertrans");
  }

  volPerLoc() {
    return this.http.get("http://localhost:8083/gcfashions/accountant/reports/volperloc");
  }
}
