interface Claims {
    [key: string]: string | string[] | number;
}

export interface User {
    username: string | number | Claims,
    roles: string | number | Claims
}