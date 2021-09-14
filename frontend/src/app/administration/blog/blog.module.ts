import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from '../../angular-material.module';
import { AppErrorHandler } from '../../common/error-handler/app-error-handler';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdministrationRoutingModule } from '../administration-routing.module';
import { SchoolingService } from 'src/app/services/schooling.service';
import { ArticlesCardsComponent } from './articles/cards/articles-cards.component';
import { ArticleFormComponent } from './articles/form/article-form.component';

@NgModule({
  declarations: [
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
    ArticlesCardsComponent,
    ArticleFormComponent
  ],
  providers: [
    SchoolingService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogModule { }
