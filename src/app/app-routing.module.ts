import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { SalesMainscreenComponent } from './sales-mainscreen/sales-mainscreen.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { ProductRegistrationListComponent } from './product-registration-list/product-registration-list.component';
import { DrugFormationComponent } from './drug-formation/drug-formation.component';
import { DrugFormationListComponent } from './drug-formation-list/drug-formation-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

// import { DrugFormationComponent } from './drug-formation/drug-formation.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/pharmacy', pathMatch: 'full'
  },
  {
    path: 'pharmacy', component: LoginPageComponent
  },
  // {
  //   path: '',component:NavBarComponent,
  //   children:[
  //     { path: 'sales', component: SalesMainscreenComponent },
  //     {
  //       path: "addcompany", component: AddCompanyComponent
  //     },
  //     { path: 'productreg', component: ProductRegistrationComponent },
  //     { path: "companylist", component: CompanyListComponent },
  //     { path: "productregistrationlist", component: ProductRegistrationListComponent },
  //     { path: "drugformation", component: DrugFormationComponent },
  //     { path: "drugformationlist", component: DrugFormationListComponent },
  //     {
  //       path: "addDrugs", component: DrugFormationComponent
  //     }
  //   ]
  // },
  { path: 'sales', component: SalesMainscreenComponent },
      {
        path: "addcompany", component: AddCompanyComponent
      },
      { path: 'productreg', component: ProductRegistrationComponent },
      { path: "companylist", component: CompanyListComponent },
      { path: "productregistrationlist", component: ProductRegistrationListComponent },
      { path: "drugformation", component: DrugFormationComponent },
      { path: "drugformationlist", component: DrugFormationListComponent },
      {
        path: "addDrugs", component: DrugFormationComponent
      }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
