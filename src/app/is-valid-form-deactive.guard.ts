import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DeactivateGeneric } from './deactivate.generic';

@Injectable({
  providedIn: 'root'
})
export class IsValidFormDeactiveGuard implements CanDeactivate<DeactivateGeneric> {
  canDeactivate(
    component: DeactivateGeneric,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.isFormValid()?window.confirm("You have unsaved changes. Leave?"):window.confirm("You have unsaved changes. Leave?");
  }
  
}
