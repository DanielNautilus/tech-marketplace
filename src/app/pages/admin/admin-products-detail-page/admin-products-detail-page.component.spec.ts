import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsDetailPageComponent } from './admin-products-detail-page.component';

describe('AdminProductsDetailPageComponent', () => {
  let component: AdminProductsDetailPageComponent;
  let fixture: ComponentFixture<AdminProductsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
