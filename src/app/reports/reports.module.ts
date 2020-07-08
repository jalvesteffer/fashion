import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricComponent } from './metric/metric.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { TaxReportComponent } from './tax-report/tax-report.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { Pie2ChartComponent } from './pie2-chart/pie2-chart.component';

@NgModule({
  declarations: [DashboardComponent, MetricComponent, BarChartComponent, TaxReportComponent, PieChartComponent, Pie2ChartComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ChartsModule
  ]
})
export class ReportsModule { }
