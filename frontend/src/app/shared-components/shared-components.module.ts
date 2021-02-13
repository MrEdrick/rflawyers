import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from '../shared-features/dialog-presenter/service/dialog.service';
import { DialogComponent } from './dialog/dialog.component';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
  declarations: [
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
    DialogComponent
  ],
  providers: [
    DialogService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule { }
