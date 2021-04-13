import { UserJwtPayload } from './user-jwt-payload.interface';
import { User } from '../configurations/users/user.entity';
import { UsersService } from '../configurations/users/users.service';
declare const UserJwtStrategy_base: new (...args: any[]) => any;
export declare class UserJwtStrategy extends UserJwtStrategy_base {
    private usersService;
    constructor(usersService: UsersService);
    validate(payload: UserJwtPayload): Promise<User>;
}
export {};
