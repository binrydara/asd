import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchListComponent } from './branch-list/branch-list.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'branch-list' },
  { path:'branch-list', component: BranchListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class BranchRoutingModule { }
