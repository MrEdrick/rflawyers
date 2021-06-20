import { Module } from '@nestjs/common';
import { ResumeItemsController } from './resume-items.controller';
import { ResumeItemsService } from './resume-items.service';
import { ResumeItemRepository } from './resume-item.repository';
import { UserAuthModule } from '../../user-auth/user-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserAuthModule,
    TypeOrmModule.forFeature([ResumeItemRepository])
  ],
  controllers: [ResumeItemsController],
  providers: [ResumeItemsService]
})
export class ResumeItemsModule {}
