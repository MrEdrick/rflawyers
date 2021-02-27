import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UplaodImageComponent } from './uplaod-image/uplaod-image.component';
import { SelectWithAvatarComponent } from './select-with-avatar/select-with-avatar.component';
import { CardComponent } from './card/card.component';
import { CardTagComponent } from './card-tag/card-tag.component';
import { CardAvatarComponent } from './card-avatar/card-avatar.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FooterFormActionsComponent } from './footer-form-actions/footer-form-actions.component';
import { ProfileTagComponent } from './profile-tag/profile-tag.component';
import { CardWithoutImageComponent } from './card-without-image/card-without-image.component';
import { FilesService } from '../shared-features/files-manager/service/file.service';
import { TableComponent } from './table/table.component';
import { UplaodImagesListComponent } from './upload-images-list/uplaod-images-list.component';
import { SelectWithAddComponent } from './select-with-add/select-with-add.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardHorizontalComponent } from './card-horizontal/card-horizontal.component';
import { DialogService } from '../shared-features/dialog-presenter/service/dialog.service';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    UplaodImageComponent,
    UplaodImagesListComponent,
    SelectWithAvatarComponent,
    SelectWithAddComponent,
    CardComponent,
    CardDisplayComponent,
    CardHorizontalComponent,
    CardTagComponent,
    CardAvatarComponent,
    CardWithoutImageComponent,
    FooterFormActionsComponent,
    ProfileTagComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AngularMaterialModule,
  ],
  exports: [
    UplaodImageComponent,
    UplaodImagesListComponent,
    SelectWithAvatarComponent,
    SelectWithAddComponent,
    CardComponent,
    CardDisplayComponent,
    CardHorizontalComponent,
    CardTagComponent,
    CardAvatarComponent,
    CardWithoutImageComponent,
    FooterFormActionsComponent,
    ProfileTagComponent,
    TableComponent,
    DialogComponent
  ],
  providers: [
    FilesService,
    DialogService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule { }
