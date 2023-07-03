import {IUser} from "../../models/IUser";

export class SetUser {
  static readonly type = '[user] Set User';
  constructor(public user: IUser) {}
}
export class Logout {
  static readonly type = '[user] Logout';
}
