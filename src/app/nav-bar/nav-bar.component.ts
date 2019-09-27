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

  routeToCompanylist(){
    this.router.navigate(['/companylist']);
  }
  routetoproductregistrationlist(){
    this.router.navigate(['/productregistrationlist']);
  }
  routetodrugformationList(){
    this.router.navigate(['/drugformationlist']);
  }

  routeToAddDrugs(){
    this.router.navigate(['/addDrugs']);
  }
  routetoSales(){
    this.router.navigate(['/sales'])
  }
}
