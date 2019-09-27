import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-registration-list',
  templateUrl: './product-registration-list.component.html',
  styleUrls: ['./product-registration-list.component.css']
})
export class ProductRegistrationListComponent implements OnInit {
cols:any[];
  constructor(private router:Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      {field: 'panelName', header: 'product name' },
      {field: 'panelType', header: 'formula' },
      {field: 'panelStartDate', header: 'box rate' },
     
    ];

  }
  routertoproductregistration(){
this.router.navigate(['productreg'])

  }

  showallproductregistration(){

    
  }

  backToMonitor(){
    history.go(-1);
  }

}
