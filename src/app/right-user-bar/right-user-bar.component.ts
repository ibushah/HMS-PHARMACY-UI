import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-right-user-bar",
  templateUrl: "./right-user-bar.component.html",
  styleUrls: ["./right-user-bar.component.css"]
})
export class RightUserBarComponent implements OnInit {
  sideBarWidth: String;
  username: String;
  constructor() {}

  ngOnInit() {
    this.username = sessionStorage.getItem("username");
  }

  openNavBar() {
    this.sideBarWidth = "250px";
  }

  closeNavBar() {
    this.sideBarWidth = "0px";
  }
}
