import { Component, OnInit } from '@angular/core';
import { DashboardDates} from './dashboarddates';
import { DashboardService } from '../Services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //dashboarddates:Date = new Date();
  dashboarddates: DashboardDates  = new DashboardDates();
  productCount =0;
  totalProductprice =0;
  salesTotalProfit = 0;

  dateFrom;
  dateTill;


  constructor(private dashboardservice:DashboardService,private router: Router,) { 
    let dateFrom = new Date();
    let dateTill = new Date();
    this.dashboarddates.from = this.dateFormatedDate(dateFrom);//dateFrom.getDate() + "/" + (dateFrom.getMonth()+1) + "/"+ dateFrom.getFullYear();
    this.dashboarddates.till = this.dateFormatedDate(dateTill); //dateTill.getDate() + "/" + (dateTill.getMonth()+1) + "/"+ dateTill.getFullYear();
    console.log(this.dashboarddates);
  }


  dateFormatedDate(date){
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  }
  ngOnInit() {
    this.getProductCount();
    this.getTotalProductPrice();
   // this.getTotalSalesProfit();

  }

  onFilter(){
    //console.log(this.dashboarddates)
    this.dashboarddates.from = this.dateFormatedDate(this.dateFrom);
    this.dashboarddates.till = this.dateFormatedDate(this.dateTill);
    this.getProductCount();
    this.getTotalProductPrice();
    this.getTotalSalesProfit();


  }
  getProductCount(){

   
    this.dashboardservice.productCount(this.dashboarddates).subscribe(
      response=>{
        console.log(response);
        this.productCount =response;

      }
    )
    
  } 

  getTotalProductPrice()  {
    this.dashboardservice.totalProduct(this.dashboarddates).subscribe(
      response=>{
        console.log(response);
        this.totalProductprice= response == null? 0 : response;

      }
    )
  }

  getTotalSalesProfit()
  {
    this.dashboardservice.salesTotalProfit(this.dashboarddates).subscribe(
      response=>{
        console.log(response);
        this.salesTotalProfit= response;

      }
    )
  }
   
  backToMonitor() {
    this.router.navigate(['sales']);
  }

}
