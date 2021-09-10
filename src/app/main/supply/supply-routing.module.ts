import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplyListComponent } from './supply-list/supply-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'supply-list'},
  {path:'supply-list',component:SupplyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplyRoutingModule { }
