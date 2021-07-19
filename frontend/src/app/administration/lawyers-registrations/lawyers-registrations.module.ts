import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from '../../angular-material.module';
import { AppErrorHandler } from '../../common/error-handler/app-error-handler';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdministrationRoutingModule } from '../administration-routing.module';
import { LawyersCardsComponent } from './lawyers/cards/lawyers-cards.component';
import { LawyerFormComponent } from './lawyers/form/lawyer-form.component';
import { LawyersService } from '../../services/lawyers.service';
import { LawyerTabComponent } from './lawyers/tab/lawyer-tab.component';
import { ResumeFormComponent } from './resume/form/resume-form.component';
import { ResumesCardsComponent } from './resume/cards/resumes-cards.component';
import { ResumesCardsWithDetailComponent } from './resume/cards-with-detail/resumes-cards-with-detail.component';
import { ResumeItemFormComponent } from './resume-item/form/resume-item-form.component';
import { ResumeItemsCardsComponent } from './resume-item/cards/resume-items-cards.component';
import { ResumesService } from '../../services/resumes.service';
import { ResumeItemsService } from '../../services/resume-items.service';
import { SchoolingCardsComponent } from './schooling/cards/schooling-cards.component';
import { SchoolingFormComponent } from './schooling/form/schooling-form.component';
import { SchoolingService } from 'src/app/services/schooling.service';

@NgModule({
  declarations: [
    SchoolingCardsComponent,
    SchoolingFormComponent,
    ResumeItemsCardsComponent,
    ResumeItemFormComponent,
    ResumesCardsComponent,
    ResumesCardsWithDetailComponent,
    ResumeFormComponent,
    LawyersCardsComponent,
    LawyerTabComponent,
    LawyerFormComponent
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
    SchoolingCardsComponent,
    SchoolingFormComponent,
    ResumeItemsCardsComponent,
    ResumeItemFormComponent,
    ResumesCardsComponent,
    ResumesCardsWithDetailComponent,
    ResumeFormComponent,
    LawyersCardsComponent,
    LawyerTabComponent,
    LawyerFormComponent
  ],
  providers: [
    SchoolingService,
    LawyersService,
    ResumesService,
    ResumeItemsService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LawyersRegistrationsModule { }
