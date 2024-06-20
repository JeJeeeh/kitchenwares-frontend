import {ProductResponse} from "../dto/products/productResponse.ts";
import axiosPrivate from "./axiosPrivate.ts";
import {ProductRequest} from "../dto/products/productRequest.ts";
import {AxiosResponse} from "axios";

interface CustomProductRequest {
    name: string,
    description: string,
    price: number,
    stock: number,
}

export const findAllProducts = async (): Promise<ProductResponse[]> => {
    const response = await axiosPrivate.get("/products")

    return response.data;
}

export const createProduct = async (data: ProductRequest): Promise<void> => {
    const customProductRequest: CustomProductRequest = {
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock
    }
    const response: AxiosResponse<ProductResponse> = await axiosPrivate.post("/products", customProductRequest);

    const formData = new FormData();
    for (let i = 0; i < data.images!.length; i++) {
        const file = data.images![i]
        formData.append("files", file, file.name)
    }

    const imageResponse = await axiosPrivate.post(`/images/${response.data.id}`, formData)
    return imageResponse.data;
}