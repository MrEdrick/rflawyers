import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebsiteComponent } from './website.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ExpertiseCardComponent } from './expertise-card/expertise-card.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsCardComponent } from './about-us-card/about-us-card.component';
import { EffectsModule } from '../effects/effects.module';

@NgModule({
  declarations: [
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    AboutUsComponent,
    AboutUsCardComponent,
    FooterComponent,
    WebsiteComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FlexLayoutModule,
    AngularMaterialModule,
    EffectsModule,
    WebsiteRoutingModule,
  ],
  exports: [
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    AboutUsComponent,
    AboutUsCardComponent,
    FooterComponent,
    WebsiteComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebsiteModule { }
