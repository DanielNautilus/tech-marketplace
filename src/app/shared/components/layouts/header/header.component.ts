import { Component } from '@angular/core';
import {UserState} from "../../../state/user/user.state";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {IUser} from "../../../models/IUser";
import {Logout} from "../../../state/user/user.action";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',
  '../../../../global-styles/_link.scss',
  '../../../../global-styles/_button.scss',
  '../../../../global-styles/_person.scss',
  '../../../../global-styles/_navigation.scss']
})
export class HeaderComponent {
  @Select(UserState.getUser) user$!: Observable<IUser>;
  constructor(private store: Store,
              private authService: AuthService) {
  }
  onLogout() {
    this.authService.logout()
  }
}
