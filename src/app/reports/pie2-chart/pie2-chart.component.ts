import { Component, OnInit } from '@angular/core';
import { ReportService } from "../../common/services/report.service";

@Component({
  selector: 'app-pie2-chart',
  templateUrl: './pie2-chart.component.html',
  styleUrls: ['./pie2-chart.component.css']
})
export class Pie2ChartComponent implements OnInit {

  
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public title;

  public donutColors=[
    {
      backgroundColor: [
        'rgba(218, 247, 166, 1)',
        'rgba(255, 195, 0, 1)',
        'rgba(255, 87, 51, 1)',
        'rgba(199, 0, 57, 1)',
        'rgba(144, 12, 63, 1)',
        'rgba(149, 165, 166, 1)',
        'rgba(46, 204, 113, 1)',
    ]
    }
  ];

  constructor(private reportService: ReportService) { }

  showConfig() {
    this.reportService.salesByCatReport().subscribe((data: any) => {
      this.title = data.reportName;
      data.reportData.forEach((element) => {
        this.doughnutChartLabels.push(element.label);
        this.doughnutChartData.push(element.value);
      });
    });
  }

  ngOnInit() {
    this.showConfig();
  }


}
