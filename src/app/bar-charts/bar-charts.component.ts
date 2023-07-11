import { Component } from '@angular/core';
import { productSales, productSalesMulti } from '../data/products';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss'],
})
export class BarChartsComponent {
  productSales: any[];
  productSalesMulti: any[];
  view: [number, number] = [700, 370];

  // options
  legendTitle: string = 'Products';
  legendTitleMulti: string = 'Months';
  legendPosition: any = 'right'; // ['right', 'below']
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Sales';
  xAxisLabel: string = 'Products';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;

  xAxisTicks: any[] = [
    'Genre 1',
    'Genre 2',
    'Genre 3',
    'Genre 4',
    'Genre 5',
    'Genre 6',
    'Genre 7',
  ];
  yAxisTicks: any[] = [100, 1000, 2000, 5000, 7000, 10000];
  
  animations: boolean = true; // animations on load
  
  showGridLines: boolean = true; // grid lines
  
  showDataLabel: boolean = true; // numbers on bars
  
  gradient: boolean = false;
  colorScheme: any = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F'],
  };
  schemeType: any = 'ordinal'; // 'ordinal' or 'linear'
  
  activeEntries: any[] = ['book'];
  barPadding: number = 5;
  tooltipDisabled: boolean = false;
  
  yScaleMax: number = 9000;
  
  roundEdges: boolean = false;
  constructor() {
    this.productSales = productSales;
    this.productSalesMulti = productSalesMulti;
  }
  onSelect(event: any) {
    // console.log(event);
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  formatString(input: string): string {
    return input.toUpperCase()
  }

  formatNumber(input: number): number {
    return input
  }

}
