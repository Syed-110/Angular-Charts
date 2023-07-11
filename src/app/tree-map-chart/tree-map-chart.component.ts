import { Component } from '@angular/core';
import { productSales } from '../data/products';

@Component({
  selector: 'app-tree-map-chart',
  templateUrl: './tree-map-chart.component.html',
  styleUrls: ['./tree-map-chart.component.scss']
})
export class TreeMapChartComponent {
  productSales: any[];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = false;
  animations: boolean = true;

  colorScheme: any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    this.productSales = productSales;
  }

  onSelect(event: any) {
    // console.log(event);
  }

  labelFormatting(c: any) {
    return `${(c.label)} Sales`;
  }
}
