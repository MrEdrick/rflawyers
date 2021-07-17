import { NgModule, LOCALE_ID, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCardsComponent } from './users/cards/users-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from '../../angular-material.module';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { AppErrorHandler } from '../../common/error-handler/app-error-handler';
import { UserFormComponent } from './users/form/user-form.component';
import { UsersService } from '../../services/users.service';
import { AdministrationRoutingModule } from '../administration-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    UsersCardsComponent,
    UserFormComponent
   ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AngularMaterialModule,
    SharedComponentsModule,
  ],
  exports: [
    UsersCardsComponent,
    UserFormComponent
  ],
  providers: [
    UsersService,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfigurationsModule { }
