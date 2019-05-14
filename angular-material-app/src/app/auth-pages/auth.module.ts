import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from './../shared/modules/material/material.module';
import { AuthComponent } from './auth.component';
import { SingupComponent } from './singup/singup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularMaterialModule,
    SharedModule
  ],
  declarations: [AuthComponent, LoginComponent, ForgotPasswordComponent, SingupComponent]
})
export class AuthModule { }
