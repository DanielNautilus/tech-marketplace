import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductsService} from "../../shared/services/products.service";
import {IProduct} from "../../shared/models/IProduct";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-products-detail-page',
  templateUrl: './products-detail-page.component.html',
  styleUrls: ['./products-detail-page.component.scss'],
  providers: [Location]
})
export class ProductsDetailPageComponent implements OnInit, OnDestroy {
  productSubscription$!: Subscription
  public product?: IProduct
  private productId!: number

  constructor(
    private productsService: ProductsService,
    private title: Title,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.productSubscription$ = this.productsService.get(this.productId).subscribe(product => {
      this.product = product
      this.title.setTitle(`Tech Marketplace | ${product.title}`)
    })
  }

  ngOnDestroy(): void {
    this.productSubscription$.unsubscribe()
  }
  goBack(){
    this.location.back()
  }

}
