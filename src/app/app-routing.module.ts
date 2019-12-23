import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { SalesMainscreenComponent } from './sales-mainscreen/sales-mainscreen.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ProductRegistrationListComponent } from './product-registration-list/product-registration-list.component';
import { DrugFormationComponent } from './drug-formation/drug-formation.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GrnFormComponent } from './grn-form/grn-form.component'
import { GrnListComponent } from './grn-list/grn-list.component'
import { GrnDetailComponent } from './grn-detail/grn-detail.component'
import { DrugFormationListComponent } from './drug-formation-list/drug-formation-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { SalesListComponent } from './sales-list/sales-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component'
import {PrintProductsComponent} from './print-products/print-products.component'
import { FusionChartComponent } from './fusion-chart/fusion-chart.component';

import { DispensaryComponent } from './dispensary/dispensary.component';
import { AdddispensaryComponent } from './adddispensary/adddispensary.component';



const routes: Routes = [
  {path: '', redirectTo: '/pharmacy', pathMatch: 'full'},
  {path: 'pharmacy', component: LoginPageComponent },
  { path: 'sales', canActivate: [AuthGuardService], component: SalesMainscreenComponent },
  { path: "addcompany", canActivate: [AuthGuardService], component: AddCompanyComponent},
  { path: 'productreg', canActivate: [AuthGuardService], component: ProductRegistrationComponent },
  { path: 'productreg/:id', canActivate: [AuthGuardService], component: ProductRegistrationComponent },
  { path: "companylist", canActivate: [AuthGuardService], component: CompanyListComponent },
  { path: "productregistrationlist", canActivate: [AuthGuardService], component: ProductRegistrationListComponent },
  { path: "drugformation", canActivate: [AuthGuardService], component: DrugFormationComponent },
  { path: "drugformationlist", canActivate: [AuthGuardService], component: DrugFormationListComponent },
  { path: "addDrugs", canActivate: [AuthGuardService], component: DrugFormationComponent},
  { path: 'dispensary',canActivate: [AuthGuardService],  component: DispensaryComponent },
  { path: 'adddispensary',canActivate: [AuthGuardService],  component: AdddispensaryComponent },
  { path: "dashboard", canActivate: [AuthGuardService], component: DashboardComponent },
  { path: "grn/:id", canActivate: [AuthGuardService], component: GrnFormComponent },
  { path: "grn", canActivate: [AuthGuardService], component: GrnFormComponent },
  { path: "grnlist", canActivate: [AuthGuardService], component: GrnListComponent },
  { path: "grndetail/:id", canActivate: [AuthGuardService], component: GrnDetailComponent },
  { path: "dispensary/:id", canActivate: [AuthGuardService], component: AdddispensaryComponent },
  { path: 'salesList', component: SalesListComponent },
  {path:'productdetail/:id',component:ProductDetailsComponent},
  {path:'printproduct',component:PrintProductsComponent},
  {path:'fusion',component:FusionChartComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
