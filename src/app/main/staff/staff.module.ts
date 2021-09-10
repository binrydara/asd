import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffNewComponent } from './staff-new/staff-new.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffListComponent } from './staff-list/staff-list.component';


@NgModule({
  declarations: [
    StaffNewComponent,
    StaffEditComponent,
    StaffListComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
