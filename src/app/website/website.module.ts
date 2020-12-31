import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent
  ],
  imports: [
    FlexLayoutModule,
    AngularMaterialModule,
    WebsiteRoutingModule,
  ],
  exports: [
    HomeComponent,
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebsiteModule { }
