import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() colors: any = "";
  @Input() set report(report: any) {
    this.populateChartData(report);
  }

  public chartTitle;
  public chartColors = [
    {
      backgroundColor: "",
    },
  ];

  public chartLabels = [];
  public chartData = [];

  constructor() {}

  ngOnInit() {}

  public populateChartData(report) {
    this.chartTitle = report.reportName;
    this.chartColors.forEach(series => {
      series.backgroundColor = this.colors;
    });    
    report.reportData.forEach((element) => {
      this.chartLabels.push(element.label);
      this.chartData.push(element.value);
    });
  }
}
