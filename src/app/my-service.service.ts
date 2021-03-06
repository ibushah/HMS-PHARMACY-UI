import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment.';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor(private http: HttpClient) { }

  checkUserandPass(name: string, pwd: string): Observable<any> {
    let user = {
      username: name,
      password: pwd
    }

    return this.http.post(environment.tokenURL + "token/generate-token",user);

  }
}
