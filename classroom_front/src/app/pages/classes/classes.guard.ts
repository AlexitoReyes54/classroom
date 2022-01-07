import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialStorageService } from 'src/app/credential-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClassesGuard implements CanActivate {
  constructor(private credentialSvc:CredentialStorageService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.credentialSvc.getCredentials().roleId == 1 || this.credentialSvc.getCredentials().roleId == 3) {
        return true;
      }else{
        return false;
      }
  }
  
}
