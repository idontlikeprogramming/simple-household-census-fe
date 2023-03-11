import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SetNewPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
  ],
})
export class AuthModule {}
