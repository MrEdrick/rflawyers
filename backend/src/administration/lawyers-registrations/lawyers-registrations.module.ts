import { Module } from '@nestjs/common';
import { LawyersModule } from './lawyers/lawyers.module';
import { ResumesModule } from './resumes/resumes.module';

@Module({
  imports: [
    ResumesModule,
    LawyersModule
  ],
  exports: [
    ResumesModule,
    LawyersModule
  ]
})
export class LawyersRegistrationsModule {}
