import {Action, Selector, State, StateContext} from "@ngxs/store";
import {IUser} from "../../models/IUser";
import {Injectable} from "@angular/core";
import {Logout, SetUser} from "./user.action";
export interface UserStateModel {
  user: IUser | null
}
@State<UserStateModel>({
  name:'user',
  defaults:{
    user: null
  }
})
@Injectable()
export class UserState {
  @Action(SetUser)
  setUser(context: StateContext<UserStateModel>, action: SetUser) {
    context.patchState({
      user: action.user
    });
  }
  @Action(Logout)
  logout(ctx: StateContext<UserStateModel>) {
    ctx.setState({
      user: null
    });
  }
  @Selector()
  static getUser(state: UserStateModel) {
    return state.user;
  }
}
