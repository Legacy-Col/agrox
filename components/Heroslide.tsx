'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { slides } from "@/constants/constants";
import { motion, spring } from "framer-motion"
import { useTypewriter } from "react-simple-typewriter";
import { useState } from "react";
import { Button } from "./ui/button";

export default function HeroSlider() {
    const [activeSlide, setActiveSlide] = useState(0);

    const currentSlide = slides[activeSlide];

    const [text] = useTypewriter({
        words: currentSlide.texts,
        loop: true,
        typeSpeed: 90,
        deleteSpeed: 70,
        delaySpeed: 2000
    })
    return (
        <section className="relative h-screen">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 20000, disableOnInteraction: false }}
                loop={true}
                effect="fade"
                onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="h-full w-full bg-cover bg-center flex items-center justify-center relative"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className=" absolute bg-black opacity-60 inset-0">
                                <div className="relative z-10 mt-34 text-white ">
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.1,
                                            delay: 0.3,
                                            type: spring,
                                            stiffness: 100,
                                            dampness: 40,
                                            mass: 1,
                                        }}
                                        className="px-10 gap-4">
                                        <h1 className="text-6xl tracking-widest mb-4">WELCOME TO AGROX!</h1>
                                        <span className="text-2xl flex text-justify text-white">"At AGROX, we bridge the gap between farmers and buyers, <br /> Offering innovative solutions to simplify connections, <br /> Fostering growth, and building a sustainable future for agriculture." </span>
                                        <p className="text-4xl font-serif my-4">{text}
                                            <span className="animate-bounce"> |</span>
                                        </p>

                                        <input
                                            placeholder="Search Products..."
                                            type="text"
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 rounded-full w-2/3 shadow-lg shadow-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 mt-48"
                                            style={{ zIndex: 1000 }}
                                        />

                                        <div className="space-x-4 mt-4 mb-6">
                                            <Button className="bg-green-950 shadow-lg shadow-neutral-400 hover:bg-neutral-700 font-serif border cursor-pointer">Join as Farmer</Button>

                                            <Button className="font-serif bg-neutral-700 hover:bg-green-950 shadow-lg shadow-neutral-400 border cursor-pointer">Browse Marketplace</Button>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
