import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WebsiteRoutingModule } from './website-routing.module';
import { MenuComponent } from './menu/menu.component';
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
import { EmailSenderComponent } from './email-sender-form/email-sender.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailSenderService } from './email-sender-form/email-sender.service';
import { CurriculumCardComponent } from './curriculum-card/curriculum-card.component';

@NgModule({
  declarations: [
    WebsiteComponent,
    MenuComponent,
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    AboutUsComponent,
    AboutUsCardComponent,
    CurriculumCardComponent,
    OurStoryComponent,
    PhilosophyComponent,
    CallToActionComponent,
    FooterComponent,
    EmailSenderComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    EffectsModule,
    WebsiteRoutingModule,
  ],
  exports: [
    WebsiteComponent,
    MenuComponent,
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    AboutUsComponent,
    AboutUsCardComponent,
    CurriculumCardComponent,
    OurStoryComponent,
    PhilosophyComponent,
    FooterComponent,
    CallToActionComponent,
    EmailSenderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    EmailSenderService
  ]
})
export class WebsiteModule { }
