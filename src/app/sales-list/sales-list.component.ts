import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }




  routeToSales(){
    this.router.navigate(["sales"]);
  }
}
