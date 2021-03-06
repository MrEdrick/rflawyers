import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UserAuthModule } from './user-auth/user-auth.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { MenuModule } from './menu/menu.module';
import { AdministrationRoutingModule } from './administration-routing.module';
import { CommonModule } from '@angular/common';
import { LawyersRegistrationsModule } from './lawyers-registrations/lawyers-registrations.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    UserAuthModule,
    ConfigurationsModule,
    LawyersRegistrationsModule,
    MenuModule
  ],
  exports: [
    UserAuthModule,
    ConfigurationsModule,
    LawyersRegistrationsModule,
    MenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdministrationModule { }
