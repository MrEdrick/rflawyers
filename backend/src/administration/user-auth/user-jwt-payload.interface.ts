export interface UserJwtPayload {
    id: string;
    name: string; 
    email: string;
    username: string;
    image: string;
    isAdministrator: boolean;
}