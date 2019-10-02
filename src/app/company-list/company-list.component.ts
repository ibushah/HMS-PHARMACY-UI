import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyServiceService } from '../Services/company-service.service';
import { MessageService } from 'primeng/api';
import { Company } from '../add-company/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
cols:any[];
company:Company=new Company();
companydata:any[];
  constructor(private router:Router,private companyservice:CompanyServiceService,private messageservice:MessageService) { }

  ngOnInit() {
    this.showallcompanies();
  }

  routetoaddcompany(){

    this.router.navigate(['addcompany']);
  }

  showallcompanies(){
    this.companydata=[];
  

    this.companyservice.getallcompany().subscribe(data=>{
      this.companydata=[];
      data.map(p=>{
        console.log("fmkmfa",p.productRegistrationList);
        this.companydata.push({
          
          id:p.id,
          name:p.name,
          discount:p.discount,
        

 })
      })
      
      
    })
    this.cols = [
      { field: 'id', header: 'ID' },
      {field: 'name', header: 'Company Name' },
      {field: 'discount', header: 'Discount' }
      
      
    
     
    ];


  }

  deletecompanybyid(id:any){
    this.companyservice.deletebyid(id).subscribe(
      data=>{

      console.log(data);
      if(data){
        this.showallcompanies();
      
      this.messageservice.add({
        severity: "success",
        summary: "Succesfully",
        detail: "company succesfully deleted!"
      });
    }
    },
    error => {
      console.log(error);
      this.messageservice.add({
        severity: "error",
        summary: "Error Found",
        detail: "Something went wrong check your internet connection "
      });
    }
    );

  }

 

  backToMonitor() {
    history.go(-1);
  }
}
