import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserDetails} from "../models/IUserDetails";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{
  protected endpoint = 'users'

  constructor(http: HttpClient) {
    super(http)
  }
  public get(id:number):Observable<IUserDetails>{
    return this.http.get<IUserDetails>(`${this.baseUrl}/${id}`)
  }
}
