import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fusion-chart',
  templateUrl: './fusion-chart.component.html',
  styleUrls: ['./fusion-chart.component.css']
})
export class FusionChartComponent implements OnInit {
  dataSource: Object;
  constructor() { 

    this.dataSource = {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country",
        yAxisName: "Reserves (MMbbl)",
        numberSuffix: "K",
        theme: "fusion"
      },
      // Chart Data
      data: [
        {
          label: "Venezuela",
          value: "290"
        },
        {
          label: "Saudi",
          value: "260"
        },
        {
          label: "Canada",
          value: "180"
        },
        {
          label: "Iran",
          value: "140"
        },
        {
          label: "Russia",
          value: "115"
        },
        {
          label: "UAE",
          value: "100"
        },
        {
          label: "US",
          value: "30"
        },
        {
          label: "China",
          value: "30"
        }
      ]
    }; // end of this.dataSource
  }

  ngOnInit() {
  }



}
