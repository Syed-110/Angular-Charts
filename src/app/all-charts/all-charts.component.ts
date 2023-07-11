import { Component } from '@angular/core';

@Component({
  selector: 'app-all-charts',
  templateUrl: './all-charts.component.html',
  styleUrls: ['./all-charts.component.scss']
})
export class AllChartsComponent {
  public data: Object[];
  public xAxis: Object;
  public yAxis: Object;
  public legend: Object;
  public dataLabelMarker: Object;
  public tooltipSetting: Object;
  public chartTitle: string;
  constructor() {
    this.chartTitle = "Sales By Month";
    this.data = [
      { month: 'January', sales: 100 },
      { month: 'February', sales: 200 },
      { month: 'March', sales: 150 },
      { month: 'April', sales: 250 },
      { month: 'May', sales: 180 },
      { month: 'June', sales: 100 },
      { month: 'July', sales: 200 },
      { month: 'August', sales: 150 },
      { month: 'September', sales: 250 },
      { month: 'October', sales: 180 },
      { month: 'November', sales: 150 },
      { month: 'December', sales: 250 }
    ];
    this.xAxis = {
      title: 'Month',
      valueType: 'Category',
    }
    this.yAxis = {
      title: 'Sales'
    }
    this.legend = {
      visible: true
    }
    this.dataLabelMarker = {
      visible: true,
      dataLabel: {
        visible: true
      }
    }
    this.tooltipSetting = {
      enable: true
    }
  }
}
