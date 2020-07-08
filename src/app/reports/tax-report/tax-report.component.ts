import { Component, OnInit } from '@angular/core';
import { ReportService } from "../../common/services/report.service";

@Component({
  selector: 'app-tax-report',
  templateUrl: './tax-report.component.html',
  styleUrls: ['./tax-report.component.css']
})
export class TaxReportComponent implements OnInit {

  constructor(private reportService: ReportService) {}

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public title;
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public series1 = { data: [], label: 'Monthly Sales' };
  public barChartData = [];
  public barColors=[
    {
      backgroundColor: 'rgba(211, 84, 0, 1)'
    }
  ];

  showConfig() {
    this.reportService.taxReport().subscribe((data: any) => {
      console.log(data)
      this.title = data.reportName;
      data.reportData.forEach((element) => {
        this.barChartLabels.push(element.label);
        this.series1.data.push(element.value);
      });
    });
    this.barChartData.push(this.series1);
  }

  ngOnInit(): void {
    this.showConfig();
  }

}
