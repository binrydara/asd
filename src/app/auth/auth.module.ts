import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginsComponent } from './logins/logins.component';

//  import { ShareModule } from './../share/share.module';

@NgModule({
  declarations: [
  
    LoginsComponent
  ],
  imports: [
    CommonModule,
    //  ShareModule
    AuthRoutingModule
  ]

})
export class AuthModule { }
