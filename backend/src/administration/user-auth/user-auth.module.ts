import { Module } from '@nestjs/common';
import { UserAuthController } from './user-auth.controller';
import { UserAuthService } from './user-auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserJwtStrategy } from './user-jwt-strategy';
import { UsersService } from '../configurations/users/users.service';
import { UserRepository } from '../configurations/users/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailSenderModule } from '../email-sender/email-sender.module';

import * as config from 'config';

const jwtConfig = config.get('jwt');

@Module({
  imports: [
    EmailSenderModule,
    TypeOrmModule.forFeature([UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || jwtConfig.secret,
      signOptions: {
        expiresIn: jwtConfig.expiresIn,
      }
    })
  ],
  controllers: [UserAuthController],
  providers: [
    UserJwtStrategy,
    UsersService,
    UserAuthService,
  ],
  exports: [
    UserJwtStrategy,
    PassportModule,
  ]
})
export class UserAuthModule {}
