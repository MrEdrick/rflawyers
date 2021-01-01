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
import { OurStoryComponent } from './our-story/our-story.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

@NgModule({
  declarations: [
    WebsiteComponent,
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    AboutUsComponent,
    AboutUsCardComponent,
    OurStoryComponent,
    PhilosophyComponent,
    CallToActionComponent,
    FooterComponent,
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
    WebsiteComponent,
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    AboutUsComponent,
    AboutUsCardComponent,
    OurStoryComponent,
    PhilosophyComponent,
    FooterComponent,
    CallToActionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebsiteModule { }