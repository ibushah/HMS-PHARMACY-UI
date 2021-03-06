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

  routeToCompanylist() { this.router.navigate(['/companylist']);}

  routetoproductregistrationlist() {this.router.navigate(['/productregistrationlist']); }

  routetodrugformationList() { this.router.navigate(['/drugformationlist']);}

  routeToAddDrugs() { this.router.navigate(['/addDrugs']);}

  routeTodispensary() { this.router.navigate(['/dispensary']);}

  routeToSalesList() {  this.router.navigate(['salesList']) }

  routeToDashboard() { this.router.navigate(['/dashboard']); }

  routeToGrn() { this.router.navigate(['grnlist']); }

  routeToPrintProducts(){ this.router.navigate(['printproduct']);}

  

  logout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userType');
     this.router.navigate(['']);
  }
}
