import { Component, OnInit } from "@angular/core";
import { SalesService } from "../Services/sales.service";
import { Sales } from "./sales";
import { MessageService } from "primeng/api";
import { TableHeaderCheckbox } from "primeng/table";

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
  output: any[] = [];
  totalRecords;
  ind=0;

  disablesavebutton: Boolean = true;
  index = 0;

  constructor(
    private salesservice: SalesService,
    private mesgService: MessageService
  ) {}

  ngOnInit() {
    this.populateCols();

    this.getProductsIndropdown();

    console.log("table data =>", this.tableData);
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
    // console.log("hey i am going to save", this.neArray);

    // let sales = JSON.stringify(this.neArray);
    // console.log("sales e", sales);

    // this.neArray = [];
    this.tableData = [];
    this.salesservice.saveSales(this.neArray).subscribe(
      data => {
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

  getProductsIndropdown() {
    let obj = [];
    this.salesservice.getProductRegistrations().subscribe(data => {
      data.map(d => {
        this.dropdownData.push({
          label: d.productName,
          value: d
        });
        obj.push(d.value);
      });
    });

    console.log("i am object", this.salesObj.productRegistration);
  }
  onProductChange() {
    this.output = [];
    Object.values(this.salesObj.productRegistration).map(d => {
      this.output.push({
        productName: d["productName"],
        boxRate: d["boxRate"]
      });
    });

    console.log("hello=====", this.salesObj.productRegistration);
  }

  getDataInSalesTable() {
  
    // this.tableData=[];
    this.disableSaveButton();
    this.index += 1;
    console.log("PPPPP", this.salesObj.productRegistration["productName"]);
    this.tableData.push({
      sno: this.index,
      name: this.salesObj.productRegistration["productName"],
      quantity: this.salesObj.productQuantity,
      total: this.salesObj.productRegistration["boxRate"]
    });

    this.neArray.push({
      productRegistration: this.salesObj.productRegistration,
      productQuantity: this.salesObj.productQuantity,
      productPrice: this.salesObj.productRegistration["boxRate"]
    });

    console.log("haasdjhjshaashjkas", this.neArray);

    console.log("in get table", this.tableData);
    this.totalRecords = this.tableData.length;
  }

  disableSaveButton() {
    if (this.tableData.length >= 0) this.disablesavebutton = false;
    else this.disablesavebutton = true;
  }

  deleteProduct(val: any) {
    console.log(val, "===========");
    
      this.tableData.splice(val, 1);
      this.neArray.splice(val, 1);
      // this.getDataInSalesTable();
    
    // console.log("row data id",val);
  }
  
}
