export interface ProductRequest {
    name: string,
    description: string,
    price: number,
    stock: number,
    images?: FileList | null | undefined
}