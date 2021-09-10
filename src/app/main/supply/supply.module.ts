import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplyRoutingModule } from './supply-routing.module';
import { SupplyListComponent } from './supply-list/supply-list.component';
import { SupplyEditComponent } from './supply-edit/supply-edit.component';
import { SupplyNewComponent } from './supply-new/supply-new.component';


@NgModule({
  declarations: [
    SupplyListComponent,
    SupplyEditComponent,
    SupplyNewComponent
  ],
  imports: [
    CommonModule,
    SupplyRoutingModule
  ]
})
export class SupplyModule { }
