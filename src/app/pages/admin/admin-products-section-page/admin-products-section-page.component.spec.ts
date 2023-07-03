import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsSectionPageComponent } from './admin-products-section-page.component';

describe('AdminProductsSectionPageComponent', () => {
  let component: AdminProductsSectionPageComponent;
  let fixture: ComponentFixture<AdminProductsSectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductsSectionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductsSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
