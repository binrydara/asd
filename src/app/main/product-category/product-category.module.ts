import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCategoryRoutingModule } from './product-category-routing.module';
import { ProductCategoryNewComponent } from './product-category-new/product-category-new.component';
import { ProductCategoryEditComponent } from './product-category-edit/product-category-edit.component';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';


@NgModule({
  declarations: [
    ProductCategoryNewComponent,
    ProductCategoryEditComponent,
    ProductCategoryListComponent
  ],
  imports: [
    CommonModule,
    ProductCategoryRoutingModule
  ]
})
export class ProductCategoryModule { }
