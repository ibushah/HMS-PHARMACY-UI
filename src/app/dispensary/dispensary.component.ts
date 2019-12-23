import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DispensaryService } from '../Services/dispensary.service';
import { MessageService } from 'primeng/api';




@Component({
  selector: 'app-dispensary',
  templateUrl: './dispensary.component.html',
  styleUrls: ['./dispensary.component.css']
})
export class DispensaryComponent implements OnInit {

  
  dispensarydata:any[];
  cols:any[];
  
  id:any;
  

  constructor(private router:Router, private dispensaryservice:DispensaryService, private messageservice:MessageService) {

    
    this.cols = [
      { field: 'id', header: 'ID' },
      {field: 'name', header: 'Dispensary Name' },
      {field: 'stock', header: 'Stock' },
      {field: 'price', header: 'Price' },
      {field: 'status', header: 'Status' }
      ];
  

   }

  ngOnInit() {
    
    // this.showalldispensary();
    this.getAlldispensary();
  }

  showalldispensary(){
    this.getAlldispensary();
  }

  getAlldispensary(){
      
    this.dispensaryservice.getalldispensary().subscribe(data=>{
      this.dispensarydata = data;
    })

  }

  
  
  deletedispensarybyid(id:any){
    this.dispensaryservice.deletebyid(id).subscribe(
      data=>{

       console.log(data);
      // if(data){
        this.showalldispensary();
      
      this.messageservice.add({
        severity: "success",
        summary: "Succesfully",
        detail: "dispensary succesfully Inactive!"
      });
    //}
    },
    error => {
      // console.log(error);
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

  updatedispensarybyid(id) {
    this.router.navigate(['dispensary/' + id])
  }

  activeDispensarybyId(id:any){
  this.dispensaryservice.activeById(id,this.dispensarydata).subscribe(
  data=>{
    
    console.log(data);
      // if(data){
        this.showalldispensary();
      
      this.messageservice.add({
        severity: "success",
        summary: "Succesfully",
        detail: "dispensary succesfully Active!"
      });

  });

  error => {
    // console.log(error);
    this.messageservice.add({
      severity: "error",
      summary: "Error Found",
      detail: "Something went wrong check your internet connection "
    });
  }
  

  }

}
