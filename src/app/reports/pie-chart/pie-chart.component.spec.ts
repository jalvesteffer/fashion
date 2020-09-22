import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule } from "ng2-charts";
import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
  it("Should populate report data from input binding", () =>{
    const chart = new PieChartComponent();
    chart.report = {
      reportName: "No Data",
      reportData: [
        {
          seriesName: "No Data",
          seriesData: [{ label: "No Data", value: 0 }],
        },
      ],
    };

    expect(chart.chartTitle).toEqual("No Data");
    expect(chart.chartLabels[0]).toEqual("No Data");
    expect(chart.chartData[0]).toEqual(0); 

  })
});
