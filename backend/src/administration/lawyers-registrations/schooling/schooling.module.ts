import { Module } from '@nestjs/common';
import { SchoolingController } from './schooling.controller';
import { SchoolingService } from './schooling.service';
import { SchoolingRepository } from './schooling.repository';
import { UserAuthModule } from '../../user-auth/user-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserAuthModule,
    TypeOrmModule.forFeature([SchoolingRepository])
  ],
  controllers: [SchoolingController],
  providers: [SchoolingService]
})
export class SchoolingModule {}
