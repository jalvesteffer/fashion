import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricComponent } from './metric.component';

describe('MetricComponent', () => {
  it("Should populate report data from input binding", () =>{
    const chart = new MetricComponent();
    chart.report = {
      reportName: "No Data",
      reportData: [
        {
          seriesName: "No Data",
          seriesData: [{ label: "No Data", value: 0 }],
        },
      ],
    };

    expect(chart.report).toBeTruthy();

  })
});
