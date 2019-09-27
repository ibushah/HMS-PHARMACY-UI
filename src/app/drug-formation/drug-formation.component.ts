import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { drugFormation } from './drugFormation';
import { DrugformationService } from '../Services/drugformation.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-drug-formation',
  templateUrl: './drug-formation.component.html',
  styleUrls: ['./drug-formation.component.css']
})
export class DrugFormationComponent implements OnInit {

  drugformation:drugFormation=new drugFormation();
  constructor(private router:Router,private drugservice:DrugformationService,private messageservice:MessageService) { }

  ngOnInit() {
  }
  routetodrugformationList(){
    this.router.navigate(['drugformationlist']);
  }
  submitdrugFormation(){
    console.log(this.drugformation);
    
    this.drugservice.postDrugFormation(this.drugformation).subscribe(
      data => {
        console.log(this.drugformation);
        this.messageservice.add({
          severity: "success",
          summary: "Succesfully",
          detail: "company successfully saved!"
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

  backToMonitor() {
    history.go(-1);
  }

  


}
