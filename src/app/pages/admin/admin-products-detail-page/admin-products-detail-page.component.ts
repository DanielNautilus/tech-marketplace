import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../../shared/services/products.service';
import {Subscription} from 'rxjs';
import {IProduct} from '../../../shared/models/IProduct';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-admin-products-detail-page',
  templateUrl: './admin-products-detail-page.component.html',
  styleUrls: ['./admin-products-detail-page.component.scss'],
  providers: [Location]
})
export class AdminProductsDetailPageComponent implements OnInit, OnDestroy {
  private productSubscription$!: Subscription;
  public product?: IProduct;
  private readonly productId!: number;
  public productForm!: FormGroup;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private title: Title,
    private fb: FormBuilder
  ) {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.setBaseState();
    this.initForm();
  }

  private setBaseState(): void {
    this.productSubscription$ = this.productsService
      .get(this.productId)
      .subscribe((product) => {
        this.product = product;
        this.patchForm();
        this.title.setTitle(`Tech Marketplace | Администрирование | ${product.title}`)
      });
  }

  private initForm(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      description: [''],
      rating: ['']
    });
  }

  private patchForm(): void {
    if (this.product) {
      this.productForm.patchValue({
        name: this.product.title,
        brand: this.product.brand,
        price: this.product.price,
        description: this.product.description,
        rating: this.product.rating
      });
    }
  }



  public cancel() {
    this.location.back();
  }

  public confirm() {
    if (this.productForm.valid && this.product) {
      const updatedProduct: IProduct = {
        ...this.product,
        title: this.productForm.value.name,
        brand: this.productForm.value.brand,
        price: +this.productForm.value.price,
        description: this.productForm.value.description,
        rating: +this.productForm.value.rating
      };
      this.productsService
        .update(this.productId, updatedProduct)
        .subscribe(() => {
        this.router.navigate(['admin','catalog'])
      })
    }
  }
  ngOnDestroy(): void {
    this.productSubscription$.unsubscribe();
  }
}
