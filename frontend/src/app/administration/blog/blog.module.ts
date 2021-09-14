import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from '../../angular-material.module';
import { AppErrorHandler } from '../../common/error-handler/app-error-handler';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdministrationRoutingModule } from '../administration-routing.module';
import { ArticlesCardsComponent } from './articles/cards/articles-cards.component';
import { ArticleFormComponent } from './articles/form/article-form.component';
import { ContentsCardsComponent } from './contents/cards/contents-cards.component';
import { ContentFormComponent } from './contents/form/content-form.component';
import { ArticlesService } from 'src/app/services/articles.service';
import { ContentsService } from 'src/app/services/contents.service';

@NgModule({
  declarations: [
    ContentsCardsComponent,
    ContentFormComponent,
    ArticlesCardsComponent,
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AdministrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AngularMaterialModule,
    SharedComponentsModule
  ],
  exports: [
    ContentsCardsComponent,
    ContentFormComponent,
    ArticlesCardsComponent,
    ArticleFormComponent
  ],
  providers: [
    ContentsService,
    ArticlesService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogModule { }
