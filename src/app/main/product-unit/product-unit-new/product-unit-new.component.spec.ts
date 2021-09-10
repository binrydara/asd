import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUnitNewComponent } from './product-unit-new.component';

describe('ProductUnitNewComponent', () => {
  let component: ProductUnitNewComponent;
  let fixture: ComponentFixture<ProductUnitNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductUnitNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUnitNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
