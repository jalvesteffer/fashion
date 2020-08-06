import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"],
})
export class BarChartComponent implements OnInit {
  @Input() prefix: string = "";
  @Input() colors: any = "";
  @Input() set report(report: any) {
    this.populateChartData(report);
  }

  public chartTitle;
  public chartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            callback: (value) => `${this.prefix}${value}`,
            beginAtZero: true,
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: (label) => `${this.prefix}${label.yLabel}`,
      },
    },
  };

  public chartColors = [
    {
      backgroundColor: "#000000",
    },
  ];

  public chartLabels = [];
  public chartLegend = false;
  public series1 = { data: [] };
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
      this.series1.data.push(element.value);
    });
    this.chartData.push(this.series1);
  }

}
