import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneRoutingModule } from './zone-routing.module';
import { ZoneNewComponent } from './zone-new/zone-new.component';
import { ZoneEditComponent } from './zone-edit/zone-edit.component';
import { ZoneListComponent } from './zone-list/zone-list.component';


@NgModule({
  declarations: [
    ZoneNewComponent,
    ZoneEditComponent,
    ZoneListComponent
  ],
  imports: [
    CommonModule,
    ZoneRoutingModule
  ]
})
export class ZoneModule { }
