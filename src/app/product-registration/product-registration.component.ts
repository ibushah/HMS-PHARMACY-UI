import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CompanyServiceService } from "../Services/company-service.service";
import { DrugformationService } from "../Services/drugformation.service";
import { productRegistration } from "./product-registration";
import { ProductRegistrationService } from "../Services/product-registration.service";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-product-registration",
  templateUrl: "./product-registration.component.html",
  styleUrls: ["./product-registration.component.css"]
})
export class ProductRegistrationComponent implements OnInit {
  productRegistration: productRegistration = new productRegistration();
  company: any[];
  unitprice: any;
  drugformation: any[];
  value1: Boolean = false;
  value2: Boolean = false;
  constructor(
    private messageservice: MessageService,
    private router: Router,
    private companyservice: CompanyServiceService,
    private drugformationservice: DrugformationService,
    private productRegistrationservice: ProductRegistrationService
  ) {}

  ngOnInit() {
    this.getcompaniesdropdown();

    this.getdrugFormationdropdown();
  }

  changeStatus1() {
    this.productRegistration.activeProduct = true;
  }
  changeStatus2() {
    this.productRegistration.runningProduct = true;
  }

  onchangeUnitPrice() {
    this.productRegistration.unitPrice =
      this.productRegistration.boxRate / this.productRegistration.packing;
    this.unitprice = this.productRegistration.unitPrice;
  }

  routetoproductregistrationlist() {
    this.router.navigate(["productregistrationlist"]);
  }
  routetoaddcompany() {
    this.router.navigate(["addcompany"]);
  }
  routetoDrugFormation() {
    this.router.navigate(["drugformation"]);
  }
  getcompaniesdropdown() {
    this.company = [];
    this.companyservice.getallcompany().subscribe(data => {
      console.log(data);
      if (data) {
        data.forEach(e => {
          this.company.push({
            label: e.name,
            value: e
          });
        });
      }
    });
  }

  getdrugFormationdropdown() {
    this.drugformation = [];
    this.drugformationservice.getallDrugFormation().subscribe(data => {
      console.log("fuckkkkkkkkkkkk", data);

      if (data) {
        data.forEach(e => {
          this.drugformation.push({
            label: e.type,
            value: e
          });
        });
      }
    });
  }

  saveproductregistrtion() {
    console.log(this.productRegistration);

    this.productRegistrationservice
      .postproductregistration(this.productRegistration)
      .subscribe(
        data => {
          this.productRegistration.companyProd = "";
          console.log(this.company);
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

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }
}
