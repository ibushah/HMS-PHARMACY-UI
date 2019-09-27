import { Component, OnInit } from '@angular/core';
import { GrnService } from '../Services/grn.service';
import { CompanyServiceService } from '../Services/company-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Grn } from './Grn';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-grn-form',
  templateUrl: './grn-form.component.html',
  styleUrls: ['./grn-form.component.css']
})
export class GrnFormComponent implements OnInit {

  status = [];
  companies = [];
  id: any;
  grn: Grn;

  constructor(private messageService: MessageService, private service: GrnService, private companyService: CompanyServiceService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.grn = new Grn();
    this.id = this.activateRoute.snapshot.params['id'];


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

  submitGrn(data, myForm) {

    if (this.id) {
      this.service.updateGrnById(this.id, this.grn).subscribe((response) => {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: response });

      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Service Message', detail: error.error });
      })
    }
    else {
      this.service.postGrn(data).subscribe((response) => {
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
}
