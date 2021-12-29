import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { ContentRepository } from './content.repository';
import { UserAuthModule } from '../../user-auth/user-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserAuthModule,
    TypeOrmModule.forFeature([ContentRepository])
  ],
  controllers: [ContentsController],
  providers: [ContentsService]
})
export class ContentsModule {}
