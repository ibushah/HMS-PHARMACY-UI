import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrnService {

  
  constructor(private http:HttpClient) {}

  public  postGrn(obj:any):Observable<any>{
    return this.http.post(environment.baseUrl+"api/grn/post",obj);
  }
}
