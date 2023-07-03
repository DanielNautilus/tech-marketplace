import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {ILogin} from "../models/ILogin";
import {map, Observable, throwError} from "rxjs";
import {IUser} from "../models/IUser";
import {Logout} from "../state/user/user.action";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  protected readonly endpoint = 'auth'
  private availableUsers: Array<ILogin> = [
    {username: 'atuny0', password: '9uQFF1Lh'}, //user
    {username: 'hbingley1', password: 'CQutx25i8r'} //admin
  ]

  constructor(http: HttpClient,
              private store: Store,
              private router: Router) {
    super(http)
  }

  private isAvailableUser(loginModel: ILogin): boolean {
    return this.availableUsers.some(u => u.username === loginModel.username && u.password === loginModel.password);
  }

  public login(loginModel: ILogin): Observable<IUser> {
    if (this.isAvailableUser(loginModel)) {
      return this.http
        .post<IUser>(`${this.baseUrl}/login`, loginModel)
        .pipe(
          map((user) => {
            user.role = loginModel.username === 'hbingley1' ? 'admin' : 'user';
            return user;
          })
        );
    }
    return throwError(new Error('Ошибка входа'));
  }

  public logout() {
    this.store.dispatch(new Logout()).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
