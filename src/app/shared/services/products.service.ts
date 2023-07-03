import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IProduct} from "../models/IProduct";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService {
  protected endpoint = 'products'

  constructor(http: HttpClient) {
    super(http)
  }

  public getAll(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(`${this.baseUrl}`)
  }

  public get(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/${id}`)
  }

  public getWithLimitAndSkip(limit: number, skip: number): Observable<Array<IProduct>> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('skip', skip)
    return this.http.get<{ products: Array<IProduct> }>(`${this.baseUrl}`, {params: params})
      .pipe(
        map(response=>response.products)
      )
  }

  public update(id: number, product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.baseUrl}/${id}`, product)
  }
}
