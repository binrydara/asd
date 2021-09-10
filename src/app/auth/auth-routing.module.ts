import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginsComponent } from './logins/logins.component';

const routes: Routes = [
   { path:'',redirectTo:"Logins",pathMatch:"full"},
   { path:'Logins',component:LoginsComponent}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AuthRoutingModule { }
