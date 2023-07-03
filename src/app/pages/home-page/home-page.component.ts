import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "../../shared/services/products.service";
import {IProduct} from "../../shared/models/IProduct";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy{
  public products: Array<IProduct> = []
  private productsSubscription$!: Subscription
  private skip = 0
  private limit = 10
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
