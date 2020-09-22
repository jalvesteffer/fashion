import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ChartsModule } from "ng2-charts";
import { BarChartComponent } from "./bar-chart.component";

describe("BarChartComponent", () => {

  it("Should populate report data from input binding", () =>{
    const chart = new BarChartComponent();
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
    expect(chart.series1.data[0]).toEqual(0);    

  })
});
