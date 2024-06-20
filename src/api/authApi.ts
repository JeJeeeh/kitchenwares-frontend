import {LoginRequest} from "../dto/auth/loginRequest.ts";
import {AuthResponse} from "../dto/auth/authResponse.ts";
import axios, {AxiosInstance} from "axios";

const baseUrl: string = "http://localhost:8001/api"
const authAxios: AxiosInstance = axios.create({
    baseURL: baseUrl
})

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await authAxios.post("/auth/login", data);

    return response.data;
}