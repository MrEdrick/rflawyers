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
import { ResumeComponent } from './resume/resume.component';
import { LawyersService } from '../services/lawyers.service';
import { ResumesService } from '../services/resumes.service';
import { ResumeItemsService } from '../services/resume-items.service';
import { ResumeItemListComponent } from './resume-item-list/resume-item-list.component';
import { BlogComponent } from './blog/blog.component';
import { ArticlesListComponent } from './blog/articles/list/articles-list.component';
import { ViewArticlesService } from '../services/view-articles.service';
import { ArticlesService } from '../services/articles.service';
import { ContentsService } from '../services/contents.service';
import { ArticlesMenuComponent } from './blog/articles/menu/articles-menu.component';
import { PostBodyComponent } from './blog/posts/body/post-body.component';
import { PostMenuComponent } from './blog/posts/menu/post-menu.component';
import { BlogMenuComponent } from './blog/blog-menu/blog-menu.component';

@NgModule({
  declarations: [
    WebsiteComponent,
    MenuComponent,
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    AboutUsComponent,
    AboutUsCardComponent,
    ResumeComponent,
    ResumeItemListComponent,
    OurStoryComponent,
    PhilosophyComponent,
    CallToActionComponent,
    FooterComponent,
    EmailSenderComponent,
    BlogComponent,
    BlogMenuComponent,
    ArticlesMenuComponent,
    ArticlesListComponent,
    PostBodyComponent,
    PostMenuComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    EffectsModule,
    WebsiteRoutingModule
  ],
  exports: [
    WebsiteComponent,
    MenuComponent,
    HomeComponent,
    ExpertiseComponent,
    ExpertiseCardComponent,
    AboutUsComponent,
    AboutUsCardComponent,
    ResumeComponent,
    ResumeItemListComponent,
    OurStoryComponent,
    PhilosophyComponent,
    FooterComponent,
    CallToActionComponent,
    EmailSenderComponent,
    BlogComponent,
    BlogMenuComponent,
    ArticlesMenuComponent,
    ArticlesListComponent,
    PostBodyComponent,
    PostMenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ResumeComponent],
  providers: [
    EmailSenderService,
    LawyersService,
    ResumesService,
    ResumeItemsService,
    ViewArticlesService,
    ArticlesService,
    ContentsService
  ]
})
export class WebsiteModule { }
