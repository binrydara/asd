import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductUnitRoutingModule } from './product-unit-routing.module';
import { ProductUnitNewComponent } from './product-unit-new/product-unit-new.component';
import { ProductUnitEditComponent } from './product-unit-edit/product-unit-edit.component';
import { ProductUnitListComponent } from './product-unit-list/product-unit-list.component';


@NgModule({
  declarations: [
    ProductUnitNewComponent,
    ProductUnitEditComponent,
    ProductUnitListComponent
  ],
  imports: [
    CommonModule,
    ProductUnitRoutingModule
  ]
})
export class ProductUnitModule { }
