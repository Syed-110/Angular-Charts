import { Component } from '@angular/core';
import { productSales } from '../data/products';

@Component({
  selector: 'app-number-card-chart',
  templateUrl: './number-card-chart.component.html',
  styleUrls: ['./number-card-chart.component.scss']
})
export class NumberCardChartComponent {
  productSales: any[];
  view: [number , number] = [700, 400];

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#deaff0';

  constructor() {
    this.productSales = productSales;
  }

  onSelect(event: any) {
    // console.log(event);
  }
}
