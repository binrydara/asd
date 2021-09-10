import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductUnitListComponent } from './product-unit-list/product-unit-list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'product-unit-list' },
  { path:'product-unit-list', component: ProductUnitListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProductUnitRoutingModule { }
