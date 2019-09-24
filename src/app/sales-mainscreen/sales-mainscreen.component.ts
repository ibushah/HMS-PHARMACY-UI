import { Component, OnInit } from "@angular/core";
import { SalesService } from "../Services/sales.service";
import { Sales } from "./sales";
import { MessageService } from "primeng/api";
import { TableHeaderCheckbox } from "primeng/table";
import { Router } from '@angular/router';

@Component({
  selector: "app-sales-mainscreen",
  templateUrl: "./sales-mainscreen.component.html",
  styleUrls: ["./sales-mainscreen.component.css"]
})
export class SalesMainscreenComponent implements OnInit {
  cols: any[];
  neArray: any[] = [];
  dropdownData: any[] = [];
  salesObj: Sales = new Sales();
  tableData: any[] = [];
  output = [{ productName: String, unitPrice: Number }];
  printData: any[] = [];
  totalRecords;
  priceIntoQuantity = 1;
  disablesavebutton: Boolean = true;
  disablePrintButton: Boolean = true;
  index = 0;
  printSlipDate: Date;
  obj: any[];
  total = 0;
  printTotal: number = 0;

  constructor(
    private salesservice: SalesService,
    private mesgService: MessageService,
    private router:Router
  ) {}

  ngOnInit() {
    this.populateCols();

    this.getProductsIndropdown();

    this.dropdownData = [{ label: "None", value: null }];
    console.log("table data =>", this.tableData);
  }

  disableSaveButton() {
    if (this.tableData.length > 0) {
      this.disablesavebutton = false;
    } else if (this.tableData.length == 0) {
      this.disablesavebutton = true;
    }    
  }

  populateCols() {
    this.cols = [
      { field: "sno", header: "Serial No" },
      { field: "name", header: "Product Name" },
      { field: "quantity", header: "Quantity" },
      { field: "total", header: "Price" }
    ];
  }


  saveSales() {
    this.tableData = [];
    this.neArray = []; 
    this.total = 0;  
    this.salesservice.saveSales(this.neArray).subscribe(
      data => {
        this.disablePrintButton = false;
        this.disableSaveButton();
        this.mesgService.add({
          severity: "success",
          summary: "Successfull",
          detail: "Sales submitted successfully"
        });
      },
      error => {
        this.mesgService.add({
          severity: "error",
          summary: "Error",
          detail: "Error submitting Sales"
        });
      }
    );
  }

  emptyPrintDataArray() {
    if(this.printData.length == 0){
      this.disablePrintButton = true;
    }
    this.printData = [];
    this.printTotal = 0;
   
  }


  getProductsIndropdown() {
    this.obj = [];
    this.salesservice.getProductRegistrations().subscribe(data => {
      data.map(d => {
        this.dropdownData.push({
          label: d.productName,
          value: d
        });
        this.obj.push(d);
      });
    });

    console.log("i am object", this.obj);
  }
  onProductChange() {
    this.output = [];
    Object.values(this.obj).map(d => {
      this.output.push({
        productName: d["productName"],
        unitPrice: d["unitPrice"]
      });
    });
    console.log("hello=====>>>", this.output);
  }

  getDataInSalesTable() {
    this.output = [];
    this.total = this.total + this.priceIntoQuantity;
    this.printTotal = this.total; 
    this.disablesavebutton = false;
    this.index += 1;

    //updateeeeee
    let updatedObj = this.tableData.find(
      d => d.name == this.salesObj.productRegistration["productName"]
    );
    if (updatedObj) {
      updatedObj["quantity"] += this.salesObj.productQuantity;
      updatedObj["total"] += this.priceIntoQuantity;

      this.tableData.map(t => {
        if (t.name == this.salesObj.productRegistration["productName"])
          return updatedObj;
        else t;
      });
    } else {
      this.tableData.push({
        sno: this.index,
        name: this.salesObj.productRegistration["productName"],
        quantity: this.salesObj.productQuantity,
        total: this.priceIntoQuantity
      });
    }

    this.neArray.push({
      productRegistration: this.salesObj.productRegistration,
      productQuantity: this.salesObj.productQuantity,
      productPrice: this.priceIntoQuantity
    });

    let updatedPrintSlipObj = this.printData.find(obj => 
      obj['name'] == this.salesObj.productRegistration["productName"]
    );
    if (updatedPrintSlipObj) {
      console.log("=====>",updatedPrintSlipObj)
      updatedPrintSlipObj["quantity"] += this.salesObj.productQuantity;
      updatedPrintSlipObj["total"] += this.priceIntoQuantity;
      this.printData.map(d => {
        if (d.name == this.salesObj.productRegistration["productName"]) {
          return updatedPrintSlipObj;
        } else return d;
      });
    } else {
      this.printData.push({
        name: this.salesObj.productRegistration["productName"],
        quantity: this.salesObj.productQuantity,
        total: this.priceIntoQuantity
      });
    }

    this.printSlipDate = new Date();
    console.log("haasdjhjshaashjkas", this.neArray);
    console.log("print data =====>", this.printData);
    console.log("in get table", this.tableData);
    this.totalRecords = this.tableData.length;
  }

  calculatePriceQuantityProduct() {
    this.priceIntoQuantity =
      this.salesObj.productRegistration["unitPrice"] *
      this.salesObj.productQuantity;
    console.log(this.priceIntoQuantity);
    this.salesObj.total = this.priceIntoQuantity;
  }

  deleteProduct(val: any) {
    console.log(val, "===========");

    this.tableData.splice(val, 1);
    this.printData.splice(val, 1);
    this.neArray.splice(val, 1);
    this.disableSaveButton();
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }


  routetoProductRegistration(){
    this.router.navigate(['productreg']);
  }

}
