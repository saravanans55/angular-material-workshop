import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HighchartsLayout } from "./highcharts-layout/highcharts.layout";
import { LineChartComponent } from './line-chart/line-chart.component';

const routes:Routes = [
  {
    path : "line-chart",
    component : LineChartComponent
  }
]

@NgModule({
  declarations : [
    HighchartsLayout,
    LineChartComponent
  ],
  imports : [
    RouterModule.forChild(routes)
  ],
  providers : [],
  schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HighchartsModules {}
