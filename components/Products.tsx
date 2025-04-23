'use client'

import { products } from "@/constants/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

export default function Products() {
    return (
        <section
            className="relative min-h-screen py-16 px-4 md:px-10 lg:px-20 bg-cover bg-center"
            style={{
                backgroundImage: `url('/crop-field.jpg')`,
            }}
        >
            <div className="absolute z-0 bg-black opacity-80 inset-0"></div>

            <div className="relative z-10">
                <h1 className="font-serif text-white my-5 md:my-10 text-center text-3xl md:text-sxl ;g:text-6xl">
                    🌿 Featured Products
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left side: 4x4 product grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 10,
                                    mass: 1,
                                    duration: 0.5,
                                    delay: 0.2
                                }}
                                className="bg-neutral-300 rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl hover:scale-[1.02] hover:cursor-pointer transition-all duration-100 hover:shadow-green-500"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-2xl"
                                />
                                <div className="p-2 text-center">
                                    <h3 className="text-xl font-sans font-semibold">Product: {product.name}</h3>
                                    <p className="text-lg font-serif">Price: {product.price}</p>
                                    <p className="text-lg font-serif">Seller: {product.seller}</p>
                                </div>
                                <div className="flex justify-center items-center space-x-4 mt-2">
                                    <Button className="shadow-lg bg-green-800 hover:bg-green-600 text-white">
                                        View Details
                                    </Button>
                                    <ShoppingCartIcon className="w-6 h-6 text-green-800" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side: Single column */}
                    <div className="col-span-1 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-green-800 to-green-900 text-white flex flex-col justify-center items-center p-6 rounded-3xl shadow-lg hover:scale-105 transition-all h-full"
                        >
                            <h3 className="text-3xl font-bold mb-4 text-center">
                                🌍 Explore Marketplace
                            </h3>
                            <p className="text-lg text-center mb-6 px-2">
                                Discover thousands of fresh farm products across Africa.
                            </p>
                            <a
                                href="/marketplace"
                                className="bg-white text-green-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                            >
                                Go to Marketplace →
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
