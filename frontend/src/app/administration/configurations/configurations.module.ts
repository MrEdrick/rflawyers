import { NgModule, LOCALE_ID, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCardsComponent } from './users/cards/users-cards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from '../../angular-material.module';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { AppErrorHandler } from '../../common/error-handler/app-error-handler';
import { UserFormComponent } from './users/form/user-form.component';
import { UsersService } from './service/users.service';
import { AdministrationRoutingModule } from '../administration-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShippingWaysCardsComponent } from './shipping-ways/cards/shipping-ways-cards.component';
import { ShippingWaysService } from './service/shipping-ways.service';
import { ShippingConfigurationsService } from './service/shipping-configurations.service';
import { ShippingWayFormComponent } from './shipping-ways/form/shipping-way-form.component';

@NgModule({
  declarations: [
    UsersCardsComponent,
    UserFormComponent,
    ShippingWaysCardsComponent,
    ShippingWayFormComponent,
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
    UserFormComponent,
    ShippingWaysCardsComponent,
    ShippingWayFormComponent,
  ],
  providers: [
    UsersService,
    ShippingWaysService,
    ShippingConfigurationsService,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfigurationsModule { }
