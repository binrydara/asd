import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUnitListComponent } from './product-unit-list.component';

describe('ProductUnitListComponent', () => {
  let component: ProductUnitListComponent;
  let fixture: ComponentFixture<ProductUnitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUnitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
