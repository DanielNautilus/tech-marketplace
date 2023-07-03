import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from "@ngxs/store";
import {UserState} from "../state/user/user.state";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!this.store.selectSnapshot(UserState.getUser);
    if (!isAuthenticated) {
      this.router.navigate(['auth']);
    }
    return isAuthenticated;
  }
}
