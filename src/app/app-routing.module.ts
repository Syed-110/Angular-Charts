import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsTutorialComponent } from './rxjs-tutorial/rxjs-tutorial.component';
import { AllChartsComponent } from './all-charts/all-charts.component';
import { BarChartsComponent } from './bar-charts/bar-charts.component';
import { AreaLineChartsComponent } from './area-line-charts/area-line-charts.component';
import { PieChartsComponent } from './pie-charts/pie-charts.component';
import { BubbleChartsComponent } from './bubble-charts/bubble-charts.component';
import { GaugeChartsComponent } from './gauge-charts/gauge-charts.component';
import { HeatMapChartComponent } from './heat-map-chart/heat-map-chart.component';
import { NumberCardChartComponent } from './number-card-chart/number-card-chart.component';
import { TreeMapChartComponent } from './tree-map-chart/tree-map-chart.component';
import { PolarRadarChartComponent } from './polar-radar-chart/polar-radar-chart.component';

const routes: Routes = [
  { path: '',component: RxjsTutorialComponent },
  { path: 'charts', component: AllChartsComponent},
  { path: 'bar', component: BarChartsComponent},
  { path: 'area-line', component: AreaLineChartsComponent},
  { path: 'pie', component: PieChartsComponent},
  { path: 'bubble', component: BubbleChartsComponent},
  { path: 'gauge', component: GaugeChartsComponent},
  { path: 'heat-map', component: HeatMapChartComponent},
  { path: 'number-card', component: NumberCardChartComponent},
  { path: 'tree-map', component: TreeMapChartComponent},
  { path: 'polar', component: PolarRadarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
