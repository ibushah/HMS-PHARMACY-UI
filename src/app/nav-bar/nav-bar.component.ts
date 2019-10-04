import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToCompanylist() {
    this.router.navigate(['/companylist']);
  }
  routetoproductregistrationlist() {
    this.router.navigate(['/productregistrationlist']);
  }
  routetodrugformationList() {
    this.router.navigate(['/drugformationlist']);
  }

  routeToAddDrugs() {
    this.router.navigate(['/addDrugs']);
  }
  routeToSalesList() {
    this.router.navigate(['salesList'])


  }
  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
  routeToGrn() {
    this.router.navigate(['grnlist']);
  }

  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userType');
    // console.log(sessionStorage.getItem('token'));
    // this.isHide = false;
    this.router.navigate(['']);
  }
}
