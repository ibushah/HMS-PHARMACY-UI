import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SalesService } from "../Services/sales.service";
import { UserInfo } from "./UserInfo";
// import { UserInfo } from '../login-page/UserInfo';

@Component({
  selector: "app-right-user-bar",
  templateUrl: "./right-user-bar.component.html",
  styleUrls: ["./right-user-bar.component.css"]
})
export class RightUserBarComponent implements OnInit {
  sideBarWidth: String;
  username: String;
  userLoginInfoObj: UserInfo = new UserInfo();
  convertedDate: string;
  date = new Date();
  totalCashInHand = 0;
  dateFilter: Date;
  totalGrn: any = 0;
  dropDowndata: any[] = [];
  checkDropdownData: any[] = [];
  disableFilterButton: boolean;
  changedUser: any;
  email: String;
  userType: string;

  constructor(private serv: SalesService) {}

  ngOnInit() {
    this.username = sessionStorage.getItem("username");
    this.userType = sessionStorage.getItem('userType')
    this.getUsersInDropdown();
    this.userLoginInfoObj.email = sessionStorage.getItem("email");
    this.populateObjectDatesWithTodaysDate(this.date);
  }

  openNavBar() {
    this.sideBarWidth = "250px";
  }

  closeNavBar() {
    this.sideBarWidth = "0px";
  }

  getTotalCashInHand() {
    this.serv.getTotal(this.userLoginInfoObj).subscribe(Response => {
      this.totalCashInHand = Response;
    });
  }

  onSelect() {
    this.changedUser = this.checkDropdownData.find(d => this.email == d.email);
  }

  getGrnTotal() {
    this.serv.getGrnTotal(this.userLoginInfoObj).subscribe(Response => {
      this.totalGrn = Response;
    });
  }

  getUsersInDropdown() {
    this.serv.getUsers().subscribe(data => {
      data.map(d => {
        this.dropDowndata.push({
          label: d.username,
          value: d.email
        });
        this.checkDropdownData.push(d);
      });
    });
  }

  filterByUsernameAndDate() {
    if (!this.email && !this.dateFilter) {
      this.userLoginInfoObj.email = sessionStorage.getItem("email");
      this.populateObjectDatesWithTodaysDate(this.date);
      this.getTotalCashInHand();
      this.getGrnTotal();
    } else if (this.email && !this.dateFilter) {
      this.username = this.changedUser["username"];
      this.userLoginInfoObj.email = this.email;
      this.populateObjectDatesWithTodaysDate(this.date);
      this.getTotalCashInHand();
      this.getGrnTotal();
    } else if (!this.email && this.dateFilter) {
      this.username = sessionStorage.getItem("username");
      this.userLoginInfoObj.email = sessionStorage.getItem("email");
      this.populateObjectDatesWithDateFilter(this.dateFilter);
      this.getTotalCashInHand();
      this.getGrnTotal();
    } else if (this.email && this.dateFilter) {
      this.username = this.changedUser["username"];
      this.userLoginInfoObj.email = this.email;
      this.populateObjectDatesWithDateFilter(this.dateFilter);
      this.getTotalCashInHand();
      this.getGrnTotal();
    }
  }

  populateObjectDatesWithTodaysDate(date: Date) {
    this.userLoginInfoObj.from = this.convertDate(date);
    this.userLoginInfoObj.till = this.convertDate(date);
  }

  populateObjectDatesWithDateFilter(date: any) {
    this.userLoginInfoObj.from = date;
    this.userLoginInfoObj.till = date;
  }
  convertDate(date: Date) {
    return (this.convertedDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
  }
}
