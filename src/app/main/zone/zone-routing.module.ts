import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneListComponent } from './zone-list/zone-list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'zone-list' },
  { path:'zone-list', component: ZoneListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ZoneRoutingModule { }
