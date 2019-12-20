import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DispensaryService {

  constructor(private http:HttpClient) { }

  private postdispensaryURL=environment.baseUrl+"api/dispensary/";
  private getalldispensaryurl=environment.baseUrl+"api/dispensary/";
  private deletedispensaryurl=environment.baseUrl+"api/dispensary/";
  private updatedispensaryurl=environment.baseUrl+"api/dispensary/";
  private getdispensaryurl=environment.baseUrl+"api/dispensary/";
  private activedispensaryurl=environment.baseUrl+"api/dispensary/active/";


  public postdispensary(dispensary:any):Observable<any>{
    return this.http.post(this.postdispensaryURL,dispensary);
 
   }
   public getalldispensary():Observable<any>{
     return this.http.get(this.getalldispensaryurl);
   }
   public deletebyid(id:any):Observable<any>{
     return this.http.delete(this.deletedispensaryurl+id);
   }
 
   public getDispensaryById(id):Observable<any>{
    return this.http.get(this.getdispensaryurl+id );
  }
   public updatebyid(id:any,dispensary:any):Observable<any>{
     return this.http.put(this.updatedispensaryurl+id,dispensary);
}

     public activeById(id,dispensary):Observable <any> {
     return this.http.put(this.activedispensaryurl+id,dispensary);
}

}
