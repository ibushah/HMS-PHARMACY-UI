import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../Services/sales.service';
import { SalesList } from './salesList';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {
  date:Date = new Date();
  cols:any;
  loader=true;
  bulksaveData = [];
  convertedDate: string;
  salesListObj: SalesList = new SalesList();
  dateFrom: Date;
  dateTill:Date;
  constructor(private router: Router, private salesService: SalesService) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'createdAt', header: 'Created At' },
      { field: 'createdBy', header: 'Created By' },
      { field: 'total', header: 'Total' }
    ];

    this.getDefaultTodayBulkSales();
  }

  getDefaultTodayBulkSales(){
   this.salesListObj.from = this.convertDate(this.date);
   this.salesListObj.till = this.convertDate(this.date);

   console.log(this.salesListObj);

    this.bulksaveData = [];
    this.salesService.getFilteredDates(this.salesListObj).subscribe(response=>{
      console.log("resp",response)
      this.loader = false;
      response.map(d=>{
        this.bulksaveData.push({
          id:d.id,
          createdAt:new Date(d.createdAt).toDateString(),
          createdBy:d.createdBy,
          total:d.total
        })
      })
    })
    console.log("bulksave data",this.bulksaveData)
  }


  onfilter(){
    if(this.dateFrom == undefined || this.dateFrom == null){
      this.salesListObj.from = this.convertDate(this.date);
      console.log("from date",this.salesListObj.from)
    }
    if(this.dateTill == undefined || this.dateTill == null){
      this.salesListObj.till = this.convertDate(this.date);
      console.log("till date",this.salesListObj.till)

    }
    else{
      this.salesListObj.from = this.convertDate(this.dateFrom);
      this.salesListObj.till = this.convertDate(this.dateTill);
    }
    this.bulksaveData = [];
    this.salesService.getFilteredDates(this.salesListObj).subscribe(response=>{
      console.log("resp",response)
      this.loader = false;
      response.map(d=>{
        this.bulksaveData.push({
          id:d.id,
          createdAt:new Date(d.createdAt).toDateString(),
          createdBy:d.createdBy,
          total:d.total
        })
      })
    })

  }

  convertDate(date: Date){

    return this.convertedDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + (date.getDate());
  }
  // convertDateTill(date: Date){

  //   return this.convertedDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + (date.getDate());
  // }
  






  routeToSales(){
    this.router.navigate(["sales"]);
  }
}
