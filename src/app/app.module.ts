import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from '@syncfusion/ej2-angular-charts'
import { LineSeriesService, 
  CategoryService, 
  LegendService,
  DataLabelService,
  TooltipService
} from '@syncfusion/ej2-angular-charts'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    RxjsTutorialComponent,
    AllChartsComponent,
    BarChartsComponent,
    AreaLineChartsComponent,
    PieChartsComponent,
    BubbleChartsComponent,
    GaugeChartsComponent,
    HeatMapChartComponent,
    NumberCardChartComponent,
    TreeMapChartComponent,
    PolarRadarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [LineSeriesService, 
    CategoryService, 
    LegendService,
    DataLabelService,
    TooltipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
