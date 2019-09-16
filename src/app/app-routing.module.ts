import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { SalesMainscreenComponent } from './sales-mainscreen/sales-mainscreen.component';
import { DrugFormationComponent } from './drug-formation/drug-formation.component';


const routes: Routes = [
  {path: '', component: SalesMainscreenComponent},
  {
    path:"addcompany",component:AddCompanyComponent
  },
  {
    path:"addDrugs",component:DrugFormationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
