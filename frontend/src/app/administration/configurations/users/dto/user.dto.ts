export interface UserDto {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    salt: string;
    image: string;
    active: boolean;
    default: boolean;
    isAdministrator: boolean;
    insertionDateTime: number;
}
