import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../../shared/models/IProduct";
import {Subscription} from "rxjs";
import {ProductsService} from "../../shared/services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-section-page',
  templateUrl: './products-section-page.component.html',
  styleUrls: ['./products-section-page.component.scss']
})
export class ProductsSectionPageComponent implements OnInit,OnDestroy{
  public products: Array<IProduct> = []
  private productsSubscription$!: Subscription
  private skip = 0
  private limit = 50
  constructor(private productsService: ProductsService,
              private route: Router) {
  }
  ngOnInit(): void {
    this.setBaseState()
  }

  private setBaseState(): void{
    this.productsSubscription$ = this.productsService.getWithLimitAndSkip(this.limit,this.skip).subscribe(products=>{
      this.products = products
    })
  }

  openProductDetailPage(id: string){
    this.route.navigate(['catalog', id])
  }
  ngOnDestroy(): void {
    this.productsSubscription$.unsubscribe()
  }
}
