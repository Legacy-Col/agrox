export interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    seller: string;
}

export interface Farmer {
    id: number;
    name: string;
    image: string;
    location: string;
    products: string[];
    Bio?: string;
}

export interface Testimonial {
    name: string;
    role: string;
    quote: string;
    image: string
}
