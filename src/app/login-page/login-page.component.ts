import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MyServiceService } from '../my-service.service';

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
  constructor(
    private router: Router,
    private messageService: MessageService,
    private _location: Location,
    private service:MyServiceService
  ) { }

  ngOnInit() {
    this.deleteAllHistory = this._location.isCurrentPathEqualTo('opd');
    this.labUrl = environment.labUrl;
    this.opdUrl = environment.opdUrl;
    this.pharmacyUrl = environment.pharmacyUrl;
  }
  check(uname: string, p: string) {
    // var output = this.service.checkUserandPass(uname, p);
    this.service.checkUserandPass(uname, p).subscribe(
      res => {
        console.log('toker', res);

        sessionStorage.setItem('token', res.result.token);
        var username = sessionStorage.setItem('username', res.result.username);
        var userType = sessionStorage.setItem('userType', res.result.userType);
        var getType = sessionStorage.getItem('userType').toUpperCase();
        this.succesMethod();
        this.goToPharmacy();
      },
      error => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Service Message',
          detail: 'Wrong username and password'
        });
      }
    );
  }

  succesMethod() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Login Succesful'
    });
  }



  

  goToPharmacy() {
    setTimeout(() => {
      this.router.navigate(['/sales'])
    }, 1000);
  }


}
