import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  protected abstract endpoint: string;
  public readonly path = ' https://dummyjson.com'

  protected constructor(
    protected http: HttpClient
  ) {
  }
  public get baseUrl(){
    return `${this.path}/${this.endpoint}`
  }
}
