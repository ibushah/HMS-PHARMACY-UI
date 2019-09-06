import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-mainscreen',
  templateUrl: './sales-mainscreen.component.html',
  styleUrls: ['./sales-mainscreen.component.css']
})
export class SalesMainscreenComponent implements OnInit {

  cols: any[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Product Name' },
      { field: 'price', header: 'Quantity' },
      { field: 'price', header: 'Price' }      
    ];
  }

}
