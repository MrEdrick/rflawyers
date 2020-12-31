import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebsiteComponent } from './website.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ExpertiseCardComponent } from './expertise-card/expertise-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    FooterComponent,
    WebsiteComponent,
  ],
  imports: [
    FlexLayoutModule,
    AngularMaterialModule,
    WebsiteRoutingModule,
  ],
  exports: [
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    FooterComponent,
    WebsiteComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebsiteModule { }
