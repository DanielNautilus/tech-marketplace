import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailPageComponent } from './products-detail-page.component';

describe('ProductsDetailPageComponent', () => {
  let component: ProductsDetailPageComponent;
  let fixture: ComponentFixture<ProductsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
