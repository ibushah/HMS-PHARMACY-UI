import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyServiceService } from '../Services/company-service.service';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { ToastServiceService } from '../toast-service.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {


  company:Company=new Company();

  constructor(private companyservice:CompanyServiceService, private router: Router,
    private messageService: MessageService,private msgService:ToastServiceService) { }

  ngOnInit() {


  }
  goBack() {
    window.history.go(-1);
  }

  submitcompany(){
    // console.log(this.company);
    
    this.companyservice.postcompany(this.company).subscribe(
      data => {
        // this.msgService.succesMethod
        if(data == "DUPLICATE"){
        console.log(data);
        this.messageService.add({
          severity: "warn",
          summary: "Already Saved",
          detail: "company already exist!"
        });
      }    
      else if(data=="Company successfully saved"){
        this.messageService.add({
          severity: "success",
          summary: "Succesfully",
          detail: "company successfully saved!"
        });
      }
      },
      
      error => {
        // console.log(error);
        this.messageService.add({
          severity: "error",
          summary: "Error Found",
          detail: "Something went wrong check your internet connection "
        });
      }
    );
    
  }


  routeToCompanylist(){
    this.router.navigate(['companylist']);
  }


  backToMonitor() {
    history.go(-1);
  }
  }


