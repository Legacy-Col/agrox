import { z } from "zod";

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

export const userSchema = z.object({
    name: z.string().min(3),
    email: z.string().email("Invalid Email"),
    password: z.string().min(6, "Passsword must contain at least six characters"),
    country: z.string().min(6),
    role: z.union([z.literal('Farmer'), z.literal('Buyer')]),
    birthday: z.date(),
})

export type userData = z.infer <typeof userSchema> 