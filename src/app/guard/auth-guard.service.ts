import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router/src/utils/preactivation';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private messageService: MessageService) { }
  // this prevents from getting into another url without login
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (sessionStorage.getItem('token') != null) {
      return true;
    } else {

      this.errorMethod("Session Expired Please Login Again")
      this.router.navigate(['']);
      return false;
    }
  }
  errorMethod(msg: String) {
    this.messageService.add({
      severity: 'error',
      summary: msg.toString(),
      detail: 'retry login'
    });
  }

}

