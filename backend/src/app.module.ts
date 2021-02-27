import { Module } from '@nestjs/common';
import { AdministrationModule } from './administration/administration.module';

@Module({
  imports: [
    AdministrationModule
  ]
})
export class AppModule {}
