'use client';

import { testimonials } from "@/constants/constants";
import { Testimonial } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Testimonials() {
    return (
        <section className="w-full px-4 md:px-8 py-16 bg-gradient-to-b from-green-900 to-green-800 text-white relative">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-wide"
                >
                    <h1 className="font-serif text-3xl">❤️ What Our Farmers Are Saying</h1>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xs:grid-cols-4 gap-8 mt-12 text-neutral-900">
                    {testimonials.map((testimonial: Testimonial, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
                            whileHover={{ scale: 1.03 }}
                            className="bg-neutral-300 rounded-2xl p-6 shadow-xl hover:shadow-green-500/30 transition-all duration-300"
                        >
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                className="rounded-full mb-4 mx-auto shadow-lg shadow-neutral-900"
                            />
                            <p className="text-base md:text-lg text-center italic mb-4">“{testimonial.quote}”</p>
                            <div className="font-semibold text-green-400 text-center">{testimonial.name}</div>
                            <div className="text-sm text-neutral-800 text-center">{testimonial.role}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


