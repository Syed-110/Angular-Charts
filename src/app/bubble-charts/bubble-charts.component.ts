import { Component } from '@angular/core';
import { bubbleData } from '../data/products';

@Component({
  selector: 'app-bubble-charts',
  templateUrl: './bubble-charts.component.html',
  styleUrls: ['./bubble-charts.component.scss']
})
export class BubbleChartsComponent {
  bubbleData: any[];
  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Months';
  maxRadius: number = 20;
  minRadius: number = 5;
  yScaleMin: number = 70;
  yScaleMax: number = 85;

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    this.bubbleData = bubbleData;
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
