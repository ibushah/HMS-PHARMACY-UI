  import { Injectable } from '@angular/core';
  import { HttpClientModule,HttpClient } from "@angular/common/http";
  import { Observable } from 'rxjs';
  import { environment } from 'src/environments/environment';

  @Injectable({
    providedIn: 'root'
  })
  export class SalesService {

    constructor(private http:HttpClient) {}

    tempApi: string = "http://localhost:3000/posts/";
    public saveSales(sales: any):Observable<any>{
      return this.http.post(environment.baseUrl + "api/sales/post",sales);
    }

    public getProductRegistrations():Observable<any>{
      return this.http.get(environment.baseUrl + "api/productRegistration/getAll");
    }

    public postQuantity(quantityObj: any):Observable<any>{
      return this.http.put(environment.baseUrl + "api/productRegistration/update",quantityObj);
    }

    public addMaxStocks(addmaxobj: any): Observable<any>{
      return this.http.put(environment.baseUrl + "api/productRegistration/addmaxstock",addmaxobj);
    }
  }
