import { Component, OnInit, HostListener } from "@angular/core";
import { SalesService } from "../Services/sales.service";
import { Sales, Products, UserTransactions } from "./sales";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: "app-sales-mainscreen",
  templateUrl: "./sales-mainscreen.component.html",
  styleUrls: ["./sales-mainscreen.component.css"]
})
export class SalesMainscreenComponent implements OnInit {
  currentDate = new Date();
  cols: any[];
  neArray: any[] = [];
  dropdownData: any[] = [];
  salesObj: Sales = new Sales();
  tableData: any[] = [];
  productArray: any[] = [];
  output = [{ productName: String, unitPrice: Number }];
  printData: any[] = [];
  totalRecords;
  priceIntoQuantity = 1;
  disablesavebutton: Boolean = true;
  disablePrintButton: Boolean = true;
  disableAddToCartButton: Boolean = true;
  index = 0;
  printSlipDate: Date;
  obj: any[];
  total = 0;
  printTotal: number = 0;
  productObj: Products = new Products();
  addInTable: Boolean = true;

  sidebarWidth: string;
  discount: number;
  price: number = 0;
  showDiv: boolean = true;
  totalFieldInForm: number = 0;
  userTransactionObj: UserTransactions = new UserTransactions();
  email: String;
  totalTransaction = 0;

  constructor(
    private salesservice: SalesService,
    private mesgService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.populateCols();

    this.getProductsIndropdown();
    this.salesObj.productQuantity = 1;


    this.getUserLoginInfo();

    // console.log("table data =>", this.tableData);

  }

  disableSaveButton() {
    if (this.tableData.length > 0) {
      this.disablesavebutton = false;
    } else if (this.tableData.length == 0) {
      this.disablesavebutton = true;
    }
  }

  disableUnit() {

    if (this.salesObj.productRegistration) return false;
    else return true;
  }

  disableCost() {
    if (this.salesObj.productQuantity) return false;
    else return true;
  }

  disableDiscount() {
    if (this.salesObj.totalSellingPrice) return false;
    else return true;
  }

  resetForm(myForm) {
    myForm.reset();
  }


  populateCols() {
    this.cols = [
      { field: "name", header: "Product Name" },
      { field: "quantity", header: "quantity" },
      { field: "actualCost", header: "Actual Cost" },
      { field: "productPrice", header: "Product Price" },
      { field: "total", header: "Price" }

    ];
  }

  saveSales() {
    this.tableData = [];
    this.total = 0;
    this.salesservice.saveSales(this.neArray).subscribe(
      data => {
        this.disablePrintButton = false;
        this.disableSaveButton();
        this.disableAddToCartButton = true;
        this.saveUserTransaction();
        this.neArray = [];
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
  //user transactions work.........
  

  getUserLoginInfo(){

    this.email = sessionStorage.getItem('email');
    this.salesservice.getUserLoginInfoByEmail(this.email).subscribe(data=>{
      this.userTransactionObj.userLoginInfo = data;
    });


  }

  saveUserTransaction(){
    this.userTransactionObj.transactionAmount = this.totalTransaction;
    this.userTransactionObj.transactionType = 'POS';
    // this.setDateInObject(this.currentDate);
    this.salesservice.postUserTransactions(this.userTransactionObj).subscribe();
    console.log("Objjjjj",this.userTransactionObj);

    
  }
  // setDateInObject(date:Date){
  //   let currentDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  //   this.userTransactionObj.transactionDate = new Date(currentDate);
  //   console.log(this.userTransactionObj.transactionDate)
    
  // }
//user transaction work end ...........


  emptyPrintDataArray() {
    this.printData = [];
    this.printTotal = 0;
    if (this.printData.length == 0) {
      this.disablePrintButton = true;
    }
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

    // console.log("i am object", this.obj);
  }
  onProductChange() {
    this.output = [];
    Object.values(this.obj).map(d => {
      this.output.push({
        productName: d["productName"],
        unitPrice: d["unitPrice"]
      });
    });

    this.productObj.id = this.salesObj.productRegistration["id"];
    this.productObj.maxStock = this.salesObj.productRegistration["maxStock"];
    this.calculatePriceQuantityProduct();
    this.getProductQuantity()
  }

  getProductQuantity() {
    this.productObj.productQuantity = this.salesObj.productQuantity;
    if (this.salesObj.productQuantity > this.productObj.maxStock)
      this.addInTable = false;
    else this.addInTable = true;
  }

  getDataInSalesTable() {
    // console.log("Product", this.productObj);
    this.output = [];
    this.total = this.total + this.totalFieldInForm;
    this.printTotal = this.total;
    this.disablesavebutton = false;

    this.totalTransaction = this.total;
   

    let updatedObj = this.tableData.find(
      d => d.name == this.salesObj.productRegistration["productName"]
    );
    if (updatedObj) {
      updatedObj["quantity"] += this.salesObj.productQuantity;
      updatedObj["total"] += this.totalFieldInForm;

      this.tableData.map(t => {
        if (t.name == this.salesObj.productRegistration["productName"])
          return updatedObj;
        else t;
      });
    }
    //clear Form when there is data in table
    else {
      this.tableData.push({
        name: this.salesObj.productRegistration["productName"],
        quantity: this.salesObj.productQuantity,
        total: this.totalFieldInForm,
        productPrice: (this.salesObj.productRegistration['unitPrice']).toFixed(2),
        actualCost: (this.priceIntoQuantity).toFixed(2)

      });
    }

    this.neArray.push({
      productRegistration: this.salesObj.productRegistration,
      productQuantity: this.salesObj.productQuantity,
      productPrice: this.salesObj.productRegistration['unitPrice'],
      totalSellingPrice: this.totalFieldInForm,
      costPrice: this.salesObj.total,
      email:sessionStorage.getItem('email')
    });

    let updatedPrintSlipObj = this.printData.find(
      obj => obj["name"] == this.salesObj.productRegistration["productName"]
    );
    if (updatedPrintSlipObj) {

      updatedPrintSlipObj["quantity"] += this.salesObj.productQuantity;
      updatedPrintSlipObj["total"] += this.totalFieldInForm;
      this.printData.map(d => {
        if (d.name == this.salesObj.productRegistration["productName"]) {
          return updatedPrintSlipObj;
        } else return d;
      });
    } else {
      this.printData.push({
        name: this.salesObj.productRegistration["productName"],
        quantity: this.salesObj.productQuantity,
        total: this.totalFieldInForm
      });
    }

    this.printSlipDate = new Date();
    this.totalRecords = this.tableData.length;
  }

  calculatePriceQuantityProduct() {
    this.priceIntoQuantity = parseFloat(
      (
        this.salesObj.productRegistration["unitPrice"] *
        this.salesObj.productQuantity
      ).toFixed(2)
    );
    // console.log(this.priceIntoQuantity);
    this.salesObj.total = parseFloat(this.priceIntoQuantity.toFixed(2));
  }

  deleteProduct(val: any, price: any) {

    this.salesservice.addMaxStocks(this.productObj).subscribe(d => {
      // console.log(d);
    });
    this.tableData.splice(val, 1);
    this.printData.splice(val, 1);
    this.neArray.splice(val, 1);
    this.total = this.total - price.toFixed(2);
    this.total = parseInt(this.total.toFixed(2));
    this.disableSaveButton();
  }
  productEmitter(product) {

    let selectedObj = this.obj.find((v) => v.id == product.id);
    this.salesObj.productRegistration = selectedObj;
    this.productObj = selectedObj;
    this.calculatePriceQuantityProduct();
    this.getProductQuantity()

  }


  clearForm() {
    this.salesObj.productRegistration = null;
    this.salesObj.total = 0;
    this.salesObj.productQuantity = 0;
  }


  callForChangeInProductStocks(myForm) {

    this.salesservice.postQuantity(this.productObj).subscribe(
      d => {
        let maxStock = Object.values(d).toString();
        if (maxStock == "MAXSTOCKUPDATED") {
          this.getDataInSalesTable();
          myForm.reset();
          this.salesObj.productQuantity = 1;
          this.mesgService.add({
            severity: "success",
            summary: "Successfull",
            detail: "Sales submitted successfully"
          });
        } else if (maxStock == "PRODUCTOUTOFSTOCK") {
          myForm.reset();
          this.salesObj.productQuantity = 1;
          this.mesgService.add({
            severity: "warn",
            summary: "Out Of Stock",
            detail:
              "Product Out Of Stock or You entered greater quantity than availaible stocks"
          });
        }
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

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || charCode < 44)) {
      return false;
    }
    return true;
  }

  routetoProductRegistration() {
    this.router.navigate(["productreg"]);
  }

  discountOnSellingPrice() {
    this.discount = this.discount ? this.discount : 0;
    console.log(this.price)
    if (this.discount < this.totalFieldInForm) {
      this.totalFieldInForm = this.price - this.discount;
      this.showDiv = true;
    }
    else {
      this.showDiv = false;
    }

  }

  addPrice() {
    this.totalFieldInForm = this.salesObj.totalSellingPrice;
    this.price = (this.totalFieldInForm) ? this.totalFieldInForm : 0
    console.log(this.price)
  }



  restrictSellingPrice() {
    if (this.salesObj.total > this.salesObj.totalSellingPrice) {
      return false;
    }
    else {
      return true;
    }
  }
}
