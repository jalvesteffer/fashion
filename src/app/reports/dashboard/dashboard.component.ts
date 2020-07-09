import { Component, OnInit } from '@angular/core';
import { ReportService } from "../../common/services/report.service";
import { AuthService } from "../../common/services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private report1;
  private report2;
  private report3;
  private report4;

  constructor(private reportService: ReportService, private auth: AuthService) { }

  ngOnInit() {

    this.reportService.totalSalesReport().subscribe((data: any) => {
      this.report1 = data;
    });

    this.reportService.avgSalesPerDay().subscribe((data: any) => {
      this.report2 = data;
    });

    this.reportService.avgSalesPerTrans().subscribe((data: any) => {
      this.report3 = data;
    });

    this.reportService.totalTaxReport().subscribe((data: any) => {
      this.report4 = data;
    });

  }

}
