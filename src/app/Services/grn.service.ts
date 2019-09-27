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
  
  public getGrnList():Observable<any>{
    return this.http.get(environment.baseUrl+"api/grn/getAll");
  }

  public deleteGrn(id):Observable<any>{
    return this.http.delete(environment.baseUrl+"api/grn/delete/"+id)
  }

  public getGrnById(id):Observable<any>{
    return this.http.get(environment.baseUrl+"api/grn/"+id)
  }

  public updateGrnById(id,obj):Observable<any>{
    return this.http.put(environment.baseUrl+"api/grn/update/"+id,obj);
  }
}

