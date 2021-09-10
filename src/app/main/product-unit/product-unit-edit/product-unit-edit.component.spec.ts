import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUnitEditComponent } from './product-unit-edit.component';

describe('ProductUnitEditComponent', () => {
  let component: ProductUnitEditComponent;
  let fixture: ComponentFixture<ProductUnitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUnitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
