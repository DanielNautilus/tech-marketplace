import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSectionPageComponent } from './products-section-page.component';

describe('ProductsSectionPageComponent', () => {
  let component: ProductsSectionPageComponent;
  let fixture: ComponentFixture<ProductsSectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSectionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
