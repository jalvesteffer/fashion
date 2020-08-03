import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private server: ServerService) { }

  salesReport() {
    return this.requestReport("http://localhost:8083/gcfashions/accountant/reports/sales");
  }

  taxReport() {
    return this.requestReport("http://localhost:8083/gcfashions/accountant/reports/taxes");
  }

  salesByCatReport() {
    return this.requestReport("http://localhost:8083/gcfashions/accountant/reports/salesbycat");
  }

  totalSalesReport() {
    return this.requestReport("http://localhost:8083/gcfashions/accountant/reports/totalsales");
  }

  totalTaxReport() {
    return this.requestReport("http://localhost:8083/gcfashions/accountant/reports/totaltaxes");
  }

  avgSalesPerDay() {
    return this.requestReport("http://localhost:8083/gcfashions/accountant/reports/salesperday");
  }

  avgSalesPerTrans() {
    return this.requestReport("http://localhost:8083/gcfashions/accountant/reports/salespertrans");
  }

  volPerLoc() {
    return this.requestReport("http://localhost:8083/gcfashions/accountant/reports/volperloc");
  }

  requestReport(url){
    return this.server.request("GET", url)
  }

}
