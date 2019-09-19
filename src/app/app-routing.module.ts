import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { SalesMainscreenComponent } from './sales-mainscreen/sales-mainscreen.component';
import { DrugFormationComponent } from './drug-formation/drug-formation.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GrnFormComponent} from './grn-form/grn-form.component'



const routes: Routes = [
  {path: '', component: SalesMainscreenComponent},
  {
    path:"addcompany",component:AddCompanyComponent
  },
  {
    path:"addDrugs",component:DrugFormationComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"grn",component:GrnFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
