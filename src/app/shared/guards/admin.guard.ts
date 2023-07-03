import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Store} from "@ngxs/store";
import {UserState} from "../state/user/user.state";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {
  }

  canActivate(): boolean {
    const user = this.store.selectSnapshot(UserState.getUser);
    const isAdmin = user?.role === 'admin';
    if (!isAdmin) {
      this.router.navigate(['']);
    }
    return isAdmin;
  }

}
