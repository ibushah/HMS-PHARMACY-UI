import { Component, OnInit } from '@angular/core';
import { GrnService } from '../Services/grn.service';
import { CompanyServiceService } from '../Services/company-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Grn } from './Grn';
import { MessageService } from 'primeng/api';
import { SalesService } from '../Services/sales.service';

@Component({
  selector: 'app-grn-form',
  templateUrl: './grn-form.component.html',
  styleUrls: ['./grn-form.component.css']
})
export class GrnFormComponent implements OnInit {

  disable:any=false;
  status = [];
  companies = [];
  id: any;
  grn: Grn;
  email: string;


  constructor(private messageService: MessageService, private service: GrnService, private companyService: CompanyServiceService, private router: Router, private activateRoute: ActivatedRoute,private salesservice: SalesService) { }

  ngOnInit() {
    this.grn = new Grn();
    this.id = this.activateRoute.snapshot.params['id'];

    this.getUserLoginInfo();
    this.getCompanies();
    if (this.id)
      this.getGrn(this.id);

  }

  getGrn(id) {

    this.service.getGrnById(id).subscribe((response) => {
      // console.log(response)
      this.grn = response;


    })
  }
  getCompanies() {
    this.companies = [{ label: 'Select company', value: null }]
    this.companyService.getallcompany().subscribe((response) => {

      response.map(company => this.companies.push({ label: company.name, value: company }))

    })
  }
  amountDetector()
  {
    this.grn.packing=this.grn.packing?this.grn.packing:0;
    this.grn.boxRate=this.grn.boxRate?this.grn.boxRate:0;
    this.disable=this.grn.discount>100?true:false;
    this.grn.discount=this.grn.discount?this.grn.discount:0;
   
   
    
    this.grn.productTotalAmount=this.grn.boxRate*this.grn.packing;
    this.grn.discountedAmount=this.grn.productTotalAmount-((this.grn.discount/100)*this.grn.productTotalAmount);
  
   
  }

  submitGrn(data, myForm) {

    if (this.id) {
      this.grn.transactionAmount = this.grn.discountedAmount;
      this.grn.transactionType = 'GRN';
      this.service.updateGrnById(this.id, this.grn).subscribe((response) => {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: response });

      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Service Message', detail: error.error });
      })
    }
    else {
      console.log(this.grn);
      this.grn.transactionAmount = this.grn.discountedAmount;
      this.grn.transactionType = 'GRN';
      this.service.postGrn(this.grn).subscribe((response) => {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: response });
        myForm.reset();
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Service Message', detail: error.error });
      })
    }

   
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  routeToGrnList() {
    this.router.navigate(['grnlist'])
  }

  getUserLoginInfo(){
    this.email = sessionStorage.getItem('email');
    this.salesservice.getUserLoginInfoByEmail(this.email).subscribe(data=>{
      this.grn.userLoginInfo = data;
    });
  }

  
}
