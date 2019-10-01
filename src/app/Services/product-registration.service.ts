import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductRegistrationService {

  constructor(private http:HttpClient) { }

private  postproductregistrationURL=environment.baseUrl+"api/productRegistration/post";
private getallproductregistrationURL=environment.baseUrl+"api/productRegistration/getAll";
private deleteproductregistrationbyidURL=environment.baseUrl+"api/productRegistration/delete/";
private updateproductregistrationURL=environment.baseUrl+"api/productRegistration/update/";
private getbyidURL=environment.baseUrl+"api/productRegistration/getOne/";
public postproductregistration(productregistration:any):Observable<any>{
  return this.http.post(this.postproductregistrationURL,productregistration);

 }
 public getallproductregistration():Observable<any>{
   return this.http.get(this.getallproductregistrationURL);
 }
 public deletebyid(id:any):Observable<any>{
   return this.http.delete(this.deleteproductregistrationbyidURL+id);
 }

 public updatebyid(id:any,productRegistration:any):Observable<any>{
   return this.http.put(this.updateproductregistrationURL+id,productRegistration);
 }
 public getbyid(id:any):Observable<any>{
  return this.http.get(this.getbyidURL+id);
}


}
