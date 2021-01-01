import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevationEffectDirective } from './elevation.effect';

@NgModule({
  declarations: [
    ElevationEffectDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ElevationEffectDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EffectsModule { }
