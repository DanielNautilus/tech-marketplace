import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductsService} from "../../../shared/services/products.service";
import {IProduct} from "../../../shared/models/IProduct";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-products-section-page',
  templateUrl: './admin-products-section-page.component.html',
  styleUrls: ['./admin-products-section-page.component.scss']
})
export class AdminProductsSectionPageComponent implements OnInit, OnDestroy {
  private productsSubscription$!: Subscription
  private limit: number
  private skip: number
  public products: Array<IProduct>

  constructor(private productsService: ProductsService,
              private router: Router) {
    this.limit = 50
    this.skip = 0
    this.products = []
  }

  ngOnInit(): void {
    this.setBaseState()
  }


  private setBaseState(): void {
    this.productsSubscription$ = this.productsService.getWithLimitAndSkip(this.limit, this.skip).subscribe(products => {
      this.products = products
    })
  }

  ngOnDestroy(): void {
    this.productsSubscription$.unsubscribe()
  }

  navigateToProduct(id: string) {
    this.router.navigate(['admin', 'items', id])
  }
}
