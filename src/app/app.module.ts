import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SalesMainscreenComponent } from './sales-mainscreen/sales-mainscreen.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import { AddCompanyComponent } from './add-company/add-company.component';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import { DrugFormationComponent } from './drug-formation/drug-formation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SalesMainscreenComponent,
    AddCompanyComponent,
    DrugFormationComponent
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
    ToastModule,
    HttpClientModule,
    DropdownModule
  
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
