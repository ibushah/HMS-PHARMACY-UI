import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SalesMainscreenComponent } from './sales-mainscreen/sales-mainscreen.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SalesMainscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    CardModule,
    TableModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
