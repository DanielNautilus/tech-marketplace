import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from "../../shared/services/users.service";
import {Select, Store} from "@ngxs/store";
import {UserState} from "../../shared/state/user/user.state";
import {Observable, Subscription} from "rxjs";
import {IUser} from "../../shared/models/IUser";
import {IUserDetails} from "../../shared/models/IUserDetails";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  @Select(UserState.getUser) user$!: Observable<IUser>;
  private userDetailsSubscription$!: Subscription;
  private userStateSubscription$!: Subscription;
  public userDetails?: IUserDetails

  constructor(private usersService: UsersService,
              private store: Store,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setBaseState()
  }


  private setBaseState(): void {
    const user = this.store.selectSnapshot<IUser | null>(UserState.getUser);
    if (user)
      this.userDetailsSubscription$ = this.usersService.get(user.id).subscribe(userDetails => {
        this.userDetails = userDetails
      })
  }
  goToAdminPage(){
    this.router.navigate(['admin'])
  }
  ngOnDestroy(): void {
    this.userDetailsSubscription$.unsubscribe()
  }
}
