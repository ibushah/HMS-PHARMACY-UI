import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private http:HttpClient) {   }

  private getProductcountURL=environment.baseUrl+"api/dashboard/productcount";
  private totalProductPrice = environment.baseUrl +"api/dashboard/getTotalProductPrice";
  private salesProfit = environment.baseUrl +"api/dashboard/getSalesProfit";

  public productCount(obj: any):Observable<any>
  {
      return this.http.post(this.getProductcountURL,obj)
  }

  public totalProduct(obj: any):Observable<any>
  {
    return this.http.post(this.totalProductPrice,obj);
  }

  public salesTotalProfit(obj:any):Observable<any>
  {
    return this.http.post(this.salesProfit,obj);
  } 


}
