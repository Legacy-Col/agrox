'use client'

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { farm } from "@/constants/constants";
import { motion } from "framer-motion";
import Image from "next/image";


export default function About() {
    return (
        <section className="h-auto w-[95%] md:w-5/6 my-10 bg-neutral-700 mx-auto rounded-3xl shadow-md shadow-neutral-900">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-6 md:p-10">
                {/* Text Section */}
                <div className="md:w-1/2 w-full">
                    <h1 className="py-6 md:text-4xl text-3xl lg:text-6xl font-serif text-white">🌾 AGROX | About Us</h1>
                    <span className="text-white font-sans my-9 block text-xl md:text-4xl">
                        Empowering Farmers, Connecting Markets
                    </span>
                    <div className="mt-4 space-y-4 text-base md:text-xl text-white">
                        <p className="font-serif">
                            At AGROX, we believe agriculture is more than just cultivation — it's community, innovation, and opportunity. Our platform is designed to bridge the gap between farmers and buyers, both locally and globally, creating seamless access to markets, resources, and partnerships.
                        </p>
                        <br />
                        <p className="font-serif">
                            We are passionate about helping West African farmers (and beyond) thrive in the modern agricultural ecosystem. Whether you're a smallholder farmer, large-scale producer, or agribusiness enthusiast, AGROX gives you the tools to:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>📦 Sell your products directly to local and international buyers</li>
                            <li>🤝 Connect with other farmers to exchange knowledge and collaborate</li>
                            <li>🌍 Expand your reach beyond borders with export opportunities</li>
                            <li>💡 Access digital tools that simplify and enhance the way you grow and sell</li>
                        </ul>
                        <span className="text-sm md:text-base font-serif text-white">
                            We're not just building a marketplace — we're building a movement. A movement to transform agriculture into a tech-powered, inclusive, and sustainable force for good.
                            <br />
                            Join AGROX. <br />
                            Grow. Connect. Thrive.
                        </span>
                    </div>
                </div>

                {/* Image Slider Section */}
                <div className="md:w-1/2 h-[300px] md:h-[500px] relative w-full rounded-2xl overflow-hidden shadow-lg">
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        effect="fade"
                        className="w-full h-full"
                    >
                        {farm.map((img, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    initial={{ scale: 1.1, opacity: 100 }}
                                    animate={{ scale: 1, opacity: 0 }}
                                    transition={{
                                        duration: 10000,
                                    }}
                                    className="h-full w-full bg-cover bg-center"
                                >
                                    <Image
                                        src={img.image}
                                        alt="farmers"
                                        layout="fill"
                                        objectFit="cover"
                                        className="w-full h-full"
                                    />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}