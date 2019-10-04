import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {PanelModule} from 'primeng/panel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
// import {DropdownModule} from 'primeng/dropdown';
// import { MessageService, SelectItem } from 'primeng/api';
// import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SalesMainscreenComponent } from './sales-mainscreen/sales-mainscreen.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
// import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import {ToastModule} from 'primeng/toast';
import { CompanyListComponent } from './company-list/company-list.component';
import { ProductRegistrationListComponent } from './product-registration-list/product-registration-list.component';
import { DrugFormationComponent } from './drug-formation/drug-formation.component';
import { DrugFormationListComponent } from './drug-formation-list/drug-formation-list.component';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';


import { LoginPageComponent } from './login-page/login-page.component';



import { DashboardComponent } from './dashboard/dashboard.component';
import {CalendarModule} from 'primeng/calendar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { GrnFormComponent } from './grn-form/grn-form.component';
import { GrnListComponent } from './grn-list/grn-list.component';
import { GrnDetailComponent } from './grn-detail/grn-detail.component';
import {NgxPrintModule} from 'ngx-print';
import { SalesListComponent } from './sales-list/sales-list.component';
import { ToastServiceService } from './toast-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SalesMainscreenComponent,
    AddCompanyComponent,

    DrugFormationComponent,
    DashboardComponent,
    GrnFormComponent,

    ProductRegistrationComponent,
    CompanyListComponent,
    ProductRegistrationListComponent,
    DrugFormationComponent,
    DrugFormationListComponent,
    DrugFormationComponent,
    LoginPageComponent,
    GrnListComponent,
    GrnDetailComponent,
    SalesListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    CardModule,
    TableModule,
    RadioButtonModule,
    ToastModule,
    HttpClientModule,


    CalendarModule,
    PanelModule,
    ProgressSpinnerModule, 
    ToastModule,
    HttpClientModule,

    // HttpClientXsrfModule,

    DropdownModule,
    NgxPrintModule
    
    

  
  ],
  providers: [MessageService,ToastServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
