import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'auth' },
  { path:'auth', loadChildren:() => import('./auth/auth.module').then(mode => mode.AuthModule) },
  { path:'main', loadChildren:() => import('./main/main.module').then(mode => mode.MainModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
