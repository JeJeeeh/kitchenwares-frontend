interface Claims {
    [key: string]: string | string[] | number;
}

export interface AccessToken {
    [key: string]: string | number | Claims;
    exp: number;
    iss: string;
    aud: string;
}

export default AccessToken