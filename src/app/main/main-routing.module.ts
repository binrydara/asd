import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path:'', component:HomeComponent,children:[{path:'home',component:HomeComponent}]}
  // {path:'',component:MainComponent,
  //     children: [
  //       { path:'home', loadChildren:() => import('./home/home.module').then(mode => mode.HomeModule) },
  //       { path:'staff', loadChildren:() => import('./staff/staff.module').then(mode => mode.StaffModule) },
  //       { path:'account', loadChildren:() => import('./account/account.module').then(mode => mode.AccountModule) },
  //       { path:'product-category', loadChildren:() => import('./product-category/product-category.module').then(mode => mode.ProductCategoryModule) },
  //       { path:'product-unit', loadChildren:() => import('./product-unit/product-unit.module').then(mode => mode.ProductUnitModule) },
  //       { path:'products', loadChildren:() => import('./products/products.module').then(mode => mode.ProductsModule) },
  //       { path:'zone', loadChildren:() => import('./zone/zone.module').then(mode => mode.ZoneModule) },
  //       { path:'branch', loadChildren:() => import('./branch/branch.module').then(mode => mode.BranchModule) },
  //       { path:'inventory', loadChildren:() => import('./inventory/inventory.module').then(mode => mode.InventoryModule) },
  //       { path:'supplier', loadChildren:() => import('./supplier/supplier.module').then(mode => mode.SupplierModule) }
  //     ] 
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class MainRoutingModule { }
