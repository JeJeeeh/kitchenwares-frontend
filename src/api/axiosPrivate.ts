import axios, {AxiosInstance} from "axios";
import store from "../store";

const baseUrl: string = "http://10.96.64.43:8001/api"
const axiosPrivate: AxiosInstance = axios.create({
    baseURL: baseUrl
})

axiosPrivate.interceptors.request.use(
    (config) => {
        const accessToken = store.getState().auth.accessToken;
        if (accessToken){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    }, (err) => Promise.reject(err)
);

export default axiosPrivate;