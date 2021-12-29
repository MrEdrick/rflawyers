import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { EmailSenderModule } from '../../email-sender/email-sender.module';
import { UserAuthModule } from '../../user-auth/user-auth.module';

@Module({
  imports: [
    UserAuthModule,
    EmailSenderModule,
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule { }
