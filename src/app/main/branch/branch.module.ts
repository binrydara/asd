import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchNewComponent } from './branch-new/branch-new.component';
import { BranchEditComponent } from './branch-edit/branch-edit.component';


@NgModule({
  declarations: [
    BranchListComponent,
    BranchNewComponent,
    BranchEditComponent
  ],
  imports: [
    CommonModule,
    BranchRoutingModule
  ]
})
export class BranchModule { }
