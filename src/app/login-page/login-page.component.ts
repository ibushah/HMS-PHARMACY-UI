import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MyServiceService } from '../my-service.service';
import { SalesService } from '../Services/sales.service';
import { UserInfo } from './UserInfo';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  deleteAllHistory;
  labUrl;
  opdUrl;
  pharmacyUrl;
  token;
  userName;
  userType;
  getType
  showErrorMessage: Boolean = false;
  email;
  userLoginInfoObj : UserInfo = new UserInfo();
  
  
  constructor(
    private router: Router,
    private messageService: MessageService,
    private _location: Location,
    private service:MyServiceService,
    private salesService:SalesService
  ) { }

  ngOnInit() {
    this.deleteAllHistory = this._location.isCurrentPathEqualTo('pharmacy');
    this.labUrl = environment.labUrl;
    this.opdUrl = environment.opdUrl;
    this.pharmacyUrl = environment.pharmacyUrl;
  }
  check(uname: string, p: string) {
    // var output = this.service.checkUserandPass(uname, p);
    this.service.checkUserandPass(uname, p).subscribe(
      res => {
        // console.log('toker', res);
       
        

        var getType = res.result.userType.toUpperCase();

        if (getType == "LAB" || getType == "PHARMACY") {
          this.errorMethod("Unauthorized for PHARMACY application")
          this.showErrorMessage = true;
        }

        else if (getType = "ADMIN" || getType == "PHARMACY") {
          this.credentials(res);
          this.succesMethod();
          this.showErrorMessage = false;
          this.goToPharmacy();
          this.saveUserLoginInfo(res);
        }

        else {
           this.showErrorMessage = true;
          this.errorMethod("Not Authorized");
        }

      },
      error => {
        this.showErrorMessage = true;
        // console.log(error);
        
        this.errorMethod("Not Authorized")
      }
    );
   
    
  }

  


  credentials(res) {
    sessionStorage.setItem('token', res.result.token);
    this.userName = sessionStorage.setItem('username', res.result.username);
    this.email = sessionStorage.setItem('email',res.result.email);
    this.userType = sessionStorage.setItem('userType', res.result.userType);
    this.getType = sessionStorage.getItem('userType').toUpperCase();

  }

  saveUserLoginInfo(res){
    this.userLoginInfoObj.email = res.result.email;
    this.userLoginInfoObj.username = res.result.username;
    console.log(this.userLoginInfoObj);
    this.salesService.saveUserLoginInfo(this.userLoginInfoObj).subscribe()
  }

  succesMethod() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Login Succesful'
    });
  }



  errorMethod(msg: String) {
    this.messageService.add({
      severity: 'error',
      summary: msg.toString(),
      detail: 'retry login'
    });
  }


  goToPharmacy() {
    setTimeout(() => {
      this.router.navigate(['/sales'])
    }, 1000);
  }
  // goToLab() {
  //   setTimeout(() => {
  //     window.location.href = "http://localhost:4201/showOrProcessReports"
  //   }, 1000);
  // }


}
