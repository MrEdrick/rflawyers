import { Module } from '@nestjs/common';
import { LawyersModule } from './lawyers/lawyers.module';
import { ResumeItemsModule } from './resume-items/resume-items.module';
import { ResumesModule } from './resumes/resumes.module';

@Module({
  imports: [
    ResumeItemsModule,
    ResumesModule,
    LawyersModule
  ],
  exports: [
    ResumeItemsModule,
    ResumesModule,
    LawyersModule
  ]
})
export class LawyersRegistrationsModule {}
