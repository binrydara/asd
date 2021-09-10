import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierNewComponent } from './supplier-new/supplier-new.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';


@NgModule({
  declarations: [
    SupplierNewComponent,
    SupplierEditComponent,
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
