import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRegistrationService } from '../Services/product-registration.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-registration-list',
  templateUrl: './product-registration-list.component.html',
  styleUrls: ['./product-registration-list.component.css']
})
export class ProductRegistrationListComponent implements OnInit {
cols:any[];
productRegistration:any[];
  constructor(private router:Router,private productregistrationservice:ProductRegistrationService,private messageservice:MessageService) { }

  ngOnInit() {
    this.showallproductregistration();
 

  }
  routertoproductregistration(){
this.router.navigate(['productreg'])

  }

  showallproductregistration(){
    this.cols = [
      { field: 'id', header: 'ID' },
      {field: 'panelName', header: 'product name' },
      {field: 'panelType', header: 'formula' },
      {field: 'panelStartDate', header: 'box rate' },
     
    ];

    this.productRegistration=[];

    this.productregistrationservice.getallproductregistration().subscribe(data=>{
      console.log(data);
      data.map(p=>{
        console.log("fmkmfa",p.productRegistrationList);
        this.productRegistration.push({
          
          id:p.id,
          name:p.productName,
          company:p.companyProd.name,
          drugformation:p.drugFormation.type,
          formula:p.formula,
          packing:p.packing,
          boxrate:p.boxRate,
          minstock:p.minStock,
          maxstock:p.maxStock,
          unitprice:p.unitPrice
        

 })
      })
      
      
    })
    this.cols = [
      { field: 'id', header: 'ID' },
      {field: 'name', header: 'Product Name' },
      {field: 'company', header: 'Company' },
      {field: 'drugformation', header: 'Drug Formation' },
      {field: 'formula', header: 'Formula' },
      {field: 'packing', header: 'Packing' },
      {field: 'boxrate', header: 'BoxRate' },
      {field: 'minstock', header: 'MinStock' },
      {field: 'maxstock', header: 'MaxStock' },
      {field: 'unitprice', header: 'Unit Price' }

      

      
      
    
     
    ];
  
  }

  backToMonitor(){
    history.go(-1);
  }

  deleteproductregistrationbyid(id:any){
    this.productregistrationservice.deletebyid(id).subscribe(
      data=>{

      console.log(data);
      if(data){
        this.showallproductregistration();
      
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

  updatebyid(id:any){
this.router.navigate(['productreg/'+id]);

  }

 

}
