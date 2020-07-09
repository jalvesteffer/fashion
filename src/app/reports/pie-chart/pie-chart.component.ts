import { Component, OnInit } from '@angular/core';
import { ReportService } from "../../common/services/report.service";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public title;

  public donutColors=[
    {
      backgroundColor: [
        'rgba(41, 128, 185, 1)',
        'rgba(31, 97, 141, 1)',
        'rgba(108, 52, 131, 1)',
        'rgba(116, 68, 138, 1)',
        'rgba(146, 33, 113, 1)',
        'rgba(149, 165, 166, 1)',
        'rgba(46, 204, 113, 1)',
    ]
    }
  ];

  constructor(private reportService: ReportService) { }

  showConfig() {
    this.reportService.volPerLoc().subscribe((data: any) => {
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
