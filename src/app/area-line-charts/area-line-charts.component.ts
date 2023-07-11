import { Component } from '@angular/core';
import { productSalesMulti } from '../data/products';

@Component({
  selector: 'app-area-line-charts',
  templateUrl: './area-line-charts.component.html',
  styleUrls: ['./area-line-charts.component.scss']
})
export class AreaLineChartsComponent {
  productSalesMulti: any[];
  view: [number, number] = [700, 370];

  // options
  legendPosition: any = 'right'; // ['right', 'below']
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Sales';
  xAxisLabel: string = 'Products';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  colorScheme: any = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F'],
  };

  constructor() {
    this.productSalesMulti = productSalesMulti;
  }
}
