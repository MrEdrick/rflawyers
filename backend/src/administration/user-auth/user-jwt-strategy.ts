import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserJwtPayload } from './user-jwt-payload.interface';
import { User } from '../configurations/users/user.entity';
import { UsersService } from '../configurations/users/users.service';
import { FilterUserDto } from '../configurations/users/dto/filter-user.dto';

import * as config from 'config';

const jwtConfig = config.get('jwt');

@Injectable()
export class UserJwtStrategy extends PassportStrategy(Strategy, 'user-jwt-strategy') {
    constructor(
        private usersService: UsersService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET || jwtConfig.secret
        });
    }

    async validate(payload: UserJwtPayload): Promise<User> {
        const { email } = payload;

        const filterUserDto = new FilterUserDto();
        filterUserDto.email = email;

        var user = (await this.usersService.getByFilter(filterUserDto))[0];

        if ((!user) || (user?.confirmationToken) || ((!user?.active))) {
            throw new UnauthorizedException();
        }

        return user;
    }
}