import { Component } from '@angular/core';
import { productSales } from '../data/products';

@Component({
  selector: 'app-gauge-charts',
  templateUrl: './gauge-charts.component.html',
  styleUrls: ['./gauge-charts.component.scss'],
})
export class GaugeChartsComponent {
  productSales: any[];
  view: [number,number] = [500, 400];
  legend: boolean = true;
  legendPosition: any = 'right';
  value: number = 50;
  previousValue: number = 100;
  units: string = 'Kg';

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor() {
    this.productSales = productSales;
  }

  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
