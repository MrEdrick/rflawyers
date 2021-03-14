import { Module } from '@nestjs/common';
import { LawyersController } from './lawyers.controller';
import { LawyersService } from './lawyers.service';
import { LawyerRepository } from './lawyer.repository';
import { UserAuthModule } from '../../user-auth/user-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserAuthModule,
    TypeOrmModule.forFeature([LawyerRepository])
  ],
  controllers: [LawyersController],
  providers: [LawyersService]
})
export class LawyersModule {}
