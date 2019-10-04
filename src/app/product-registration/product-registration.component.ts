import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { CompanyServiceService } from "../Services/company-service.service";
import { DrugformationService } from "../Services/drugformation.service";
import { productRegistration } from "./product-registration";
import { ProductRegistrationService } from "../Services/product-registration.service";
import { MessageService } from "primeng/api";
import { isFulfilled } from 'q';

@Component({
  selector: "app-product-registration",
  templateUrl: "./product-registration.component.html",
  styleUrls: ["./product-registration.component.css"]
})
export class ProductRegistrationComponent implements OnInit {
  productRegistration: productRegistration = new productRegistration();
  company: any[];
  productid:any;
  unitprice: any;
  drugformation: any[];
  value1: Boolean = false;
  value2: Boolean = false;
  constructor(
    private messageservice: MessageService,
    private router: Router,
    private activateroute:ActivatedRoute,
    private companyservice: CompanyServiceService,
    private drugformationservice: DrugformationService,
    private productRegistrationservice: ProductRegistrationService
  ) {}

  ngOnInit() {
    this.productid=this.activateroute.snapshot.params['id'];
    this.getcompaniesdropdown();
    this.getdrugFormationdropdown();

    if(this.productid!=null)
    {
      this.getbyid(this.productid);
    }

    
  }

  changeStatus1() {
    this.productRegistration.state ="activeProduct";
  }
  changeStatus2() {
    this.productRegistration.state ="runningProduct";
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
      // console.log(data);
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
      // console.log("fuckkkkkkkkkkkk", data);

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


  disableMaxAndMinStock(){

    if(this.productRegistration.packing && this.productRegistration.boxRate){
      return false;
    }
    else{
      return true;
    }

  }

  saveproductregistrtion() {
    // console.log(this.productRegistration);
    if(this.productid!=null){
      this.productRegistrationservice.updatebyid(this.productid,this.productRegistration).subscribe(
        data => {
          
          this.messageservice.add({
            severity: "success",
            summary: "Succesfully",
            detail: "product Registration updated successfully!"
          });
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
else{
    this.productRegistrationservice
      .postproductregistration(this.productRegistration)
      .subscribe(
        data => {
          this.unitprice = 0;
          this.productRegistration.companyProd = "";
          // console.log(this.company);
          this.messageservice.add({
            severity: "success",
            summary: "Succesfully",
            detail: "company successfully saved!"
          });
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
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }

  backToMonitor() {
    history.go(-1);
  }

  getbyid(id:any){
    this.productRegistrationservice.getbyid(id).subscribe(data=>{
      // console.log(data);
      this.productRegistration.productName=data.productName;
      this.productRegistration.companyProd=data.companyProd;
      this.productRegistration.formula=data.formula;
      this.productRegistration.drugFormation=data.drugFormation;
      this.productRegistration.packing=data.packing;
      this.productRegistration.boxRate=data.boxRate;
      this.productRegistration.minStock=data.minStock;
      this.productRegistration.maxStock=data.maxStock;
      this.productRegistration.state=data.state;
      this.productRegistration.unitPrice=data.unitPrice;
      this.unitprice=data.unitPrice;

    })

  }

}
