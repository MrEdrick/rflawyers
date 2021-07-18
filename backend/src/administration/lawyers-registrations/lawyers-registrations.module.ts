import { Module } from '@nestjs/common';
import { LawyersModule } from './lawyers/lawyers.module';
import { ResumeItemsModule } from './resume-items/resume-items.module';
import { ResumesModule } from './resumes/resumes.module';
import { SchoolingModule } from './schooling/schooling.module';

@Module({
  imports: [
    ResumeItemsModule,
    ResumesModule,
    SchoolingModule,
    LawyersModule
  ],
  exports: [
    ResumeItemsModule,
    ResumesModule,
    SchoolingModule,
    LawyersModule
  ]
})
export class LawyersRegistrationsModule {}
