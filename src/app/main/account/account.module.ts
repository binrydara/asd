import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountNewComponent } from './account-new/account-new.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountListComponent } from './account-list/account-list.component';


@NgModule({
  declarations: [
    AccountNewComponent,
    AccountEditComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
