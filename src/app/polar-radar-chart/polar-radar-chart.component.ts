import { Component } from '@angular/core';
import { productSalesMulti } from '../data/products';

@Component({
  selector: 'app-polar-radar-chart',
  templateUrl: './polar-radar-chart.component.html',
  styleUrls: ['./polar-radar-chart.component.scss']
})
export class PolarRadarChartComponent {
  productSalesMulti: any[];
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Products';
  yAxisLabel: string = 'Sales';

  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    this.productSalesMulti = productSalesMulti;
  }

  onSelect(event: any) {
    // console.log(event);
  }
}
