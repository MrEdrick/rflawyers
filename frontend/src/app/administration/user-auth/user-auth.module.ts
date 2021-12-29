import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpComponent } from './singup/singup.component';
import { SingInComponent } from './singin/singin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from '../../angular-material.module';
import { AuthGuardService } from '../../services/auth-guard.service';
import { AdministrationRoutingModule } from '../administration-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  declarations: [
    SingInComponent,
    SingUpComponent,
    ResetPasswordComponent,
   ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AngularMaterialModule,
  ],
  exports: [
    SingInComponent,
    SingUpComponent,
    ResetPasswordComponent,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserAuthModule { }
