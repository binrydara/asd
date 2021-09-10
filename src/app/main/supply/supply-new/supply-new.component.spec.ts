import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyNewComponent } from './supply-new.component';

describe('SupplyNewComponent', () => {
  let component: SupplyNewComponent;
  let fixture: ComponentFixture<SupplyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
