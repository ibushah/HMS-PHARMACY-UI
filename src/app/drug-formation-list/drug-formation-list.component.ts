import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugformationService } from '../Services/drugformation.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-drug-formation-list',
  templateUrl: './drug-formation-list.component.html',
  styleUrls: ['./drug-formation-list.component.css']
})
export class DrugFormationListComponent implements OnInit {

  drugFormationData:any[];
  cols:any[];

  constructor(private router:Router,private drugservice:DrugformationService,private messageservice:MessageService) { }

  ngOnInit() {
this.showallDrugFormation();
  }


  routetoDrugFormation(){
    this.router.navigate(['drugformation']);
  }
  showallDrugFormation(){
    this.drugFormationData=[];
  

    this.drugservice.getallDrugFormation().subscribe(data=>{
      console.log(data);
      this.drugFormationData=[];
      data.map(p=>{
        console.log("fmkmfa",p.productRegistrationList);
        this.drugFormationData.push({
          
          id:p.id,
          type:p.type
        

 })
      })
      
      
    })
    this.cols = [
      { field: 'id', header: 'ID' },
      {field: 'type', header: 'Drug Formation Type' },
      
      
      
    
     
    ];


  }

  deletecompanybyid(id:any){
    this.drugservice.deletebyid(id).subscribe(
      data=>{

      console.log(data);
      if(data){
        this.showallDrugFormation();
      }
      this.messageservice.add({
        severity: "success",
        summary: "Succesfully",
        detail: "company succesfully deleted!"
      });
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

 


}
