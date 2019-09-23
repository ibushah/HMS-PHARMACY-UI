import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DrugformationService {

  private postdrugformationURL=environment.baseUrl+"api/drugFormation/post";
  private getAlldrugformationURL=environment.baseUrl+"api/drugFormation/getAll";
  private deleteByIDdrugformationURL=environment.baseUrl+"api/drugFormation/delete/";
  private updatebyIddrugformationURL=environment.baseUrl+"api/drugFormation";

  constructor(private http:HttpClient) { }


  public postDrugFormation(drugformation:any):Observable<any>{
    return this.http.post(this.postdrugformationURL,drugformation);
  
   }
   public getallDrugFormation():Observable<any>{
     return this.http.get(this.getAlldrugformationURL);
   }
   public deletebyid(id:any):Observable<any>{
     return this.http.delete(this.deleteByIDdrugformationURL+id);
   }
  
   public updatebyid(id:any,drugformation:any):Observable<any>{
     return this.http.put(this.updatebyIddrugformationURL+id,drugformation);
   }
  
}
