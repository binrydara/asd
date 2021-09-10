import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsNewComponent } from './products-new/products-new.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';


@NgModule({
  declarations: [
    ProductsNewComponent,
    ProductsEditComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
