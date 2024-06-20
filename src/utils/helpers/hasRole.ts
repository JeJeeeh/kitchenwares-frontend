import {User} from "../../dto/auth/user.ts";

export const hasRole = (user: User, role: string) => {
    if (user.roles instanceof Array){
        const roles: string[] = user.roles;
        return roles.includes(role);
    }

    return false;
}