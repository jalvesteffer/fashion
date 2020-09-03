import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChartsModule } from "ng2-charts";
import { BarChartComponent } from "./bar-chart.component";

describe("BarChartComponent", () => {
  // let component: BarChartComponent;
  // let fixture: ComponentFixture<BarChartComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [ChartsModule],
  //     declarations: [BarChartComponent],
  //   }).compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BarChartComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });

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

  })
});
