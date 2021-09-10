import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierListComponent } from './supplier-list/supplier-list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'supplier-list' },
  { path:'supplier-list', component: SupplierListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SupplierRoutingModule { }
