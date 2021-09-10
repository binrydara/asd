import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';


const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'account-list' },
  { path:'account-list', component:AccountListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AccountRoutingModule { }
