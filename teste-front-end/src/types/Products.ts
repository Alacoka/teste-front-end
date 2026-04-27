export interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

export interface ProductResponse {
    sucess: boolean;
    products: Product[];
}