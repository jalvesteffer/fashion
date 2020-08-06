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
  private report5;
  private report6;
  private report7;
  private report8;

  private lightColors = ["#ec6262", "#e1d276", "#99ea86", "#83d6b7", "#e4a8f9"];
  private darkColors = ["#5ba95d", "#478d73", "#446b6a", "#404c54", "#32343e"];

  constructor(private reportService: ReportService, private auth: AuthService) { }

  ngOnInit() {

    this.reportService.requestReport("totalsales").subscribe((data: any) => {
      this.report1 = data;
    });

    this.reportService.requestReport("salesperday").subscribe((data: any) => {
      this.report2 = data;
    });

    this.reportService.requestReport("salespertrans").subscribe((data: any) => {
      this.report3 = data;
    });

    this.reportService.requestReport("totaltaxes").subscribe((data: any) => {
      this.report4 = data;
    });

    this.reportService.requestReport("sales").subscribe((data: any) => {
      this.report5 = data;
    });

    this.reportService.requestReport("salesbycat").subscribe((data: any) => {
      this.report6 = data;
    });

    this.reportService.requestReport("taxes").subscribe((data: any) => {
      this.report7 = data;
    });

    this.reportService.requestReport("volperloc").subscribe((data: any) => {
      this.report8 = data;
    });

  }

  logout(){
    this.auth.logout();
  }

}
