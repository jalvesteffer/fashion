import { Component, OnInit } from '@angular/core';
import { ReportService } from "../../common/services/report.service";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private reportService: ReportService) {}

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
  };
  public title;
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public series1 = { data: [], label: 'Total Sales' };
  public barChartData = [];
  public barColors=[
    {
      backgroundColor: 'rgba(46, 204, 113, 1)'
    }
  ];

  showConfig() {
    this.reportService.salesReport().subscribe((data: any) => {
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
