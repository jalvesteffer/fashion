import { Component, Input } from "@angular/core";

@Component({
  selector: "app-metric",
  templateUrl: "./metric.component.html",
  styleUrls: ["./metric.component.css"],
})
export class MetricComponent {
  @Input()
  private report;

  constructor() {}

}