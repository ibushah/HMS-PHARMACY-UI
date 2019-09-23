import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private http:HttpClient) { }

  private postCompanyURL=environment.baseUrl+"api/company/post";
  private getallcompanyurl=environment.baseUrl+"api/company/getAll";
  private deletecompanyurl=environment.baseUrl+"api/company/delete/";
  private updatecompanyurl=environment.baseUrl+"api/company/";

 public postcompany(company:any):Observable<any>{
   return this.http.post(this.postCompanyURL,company);

  }
  public getallcompany():Observable<any>{
    return this.http.get(this.getallcompanyurl);
  }
  public deletebyid(id:any):Observable<any>{
    return this.http.delete(this.deletecompanyurl+id);
  }

  public updatebyid(id:any,company:any):Observable<any>{
    return this.http.put(this.updatecompanyurl+id,company);
  }

  
}
