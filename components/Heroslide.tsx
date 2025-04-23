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
        <section className="relative md:h-screen h-[90vh] overflow-hidden">
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
                                <div className="relative z-10 md:mt-34 mt-4 text-white max-w-6xl md:max-w-full mx-auto flex items-center flex-col md:flex-row">
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
                                        className="md:px-10 px-6 gap-4">
                                        <h1 className="md:text-6xl text-4xl text-center md:block tracking-widest mb-4">WELCOME TO AGROX!</h1>
                                        <span className="text-md md:text-lg flex text-white">"At AGROX, we bridge the gap between farmers and buyers, <br /> Offering innovative solutions to simplify connections, <br /> Fostering growth, and building a sustainable future for agriculture." </span>
                                        <p className="md:text-4xl text-xl font-serif my-4">{text}
                                            <span className="animate-bounce"> |</span>
                                        </p>
                                        <div className="w-full max-w-xl mt-6 mb-6 flex justify-center ">
                                            <input
                                                placeholder="Search Products..."
                                                type="text"
                                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black md:p-4 p-2 rounded-full w-2/3 shadow-lg shadow-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 md:mt-56 mt-56 lg:mt-48"
                                                style={{ zIndex: 1000 }}
                                            />
                                        </div>

                                        <div className="space-x-4 mt-4 mb-8 md:mb-6 md:gap-6 flex flex-row flex-1">
                                            <Button className="bg-green-950 shadow-lg shadow-neutral-400 hover:bg-neutral-700 font-serif border cursor-pointer ">Join as Farmer</Button>

                                            <Button className="font-serif bg-neutral-700 hover:bg-green-950 shadow-lg shadow-neutral-400 border cursor-pointer ">Browse Marketplace</Button>
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
