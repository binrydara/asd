import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffListComponent } from './staff-list/staff-list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'staff-list' },
  { path:'staff-list', component: StaffListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class StaffRoutingModule { }
