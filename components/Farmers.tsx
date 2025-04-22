'use client'

import { Farmer } from "@/types/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { farmers as farmData } from "@/constants/constants";




export default function Farmers() {
    const [farmers, setFarmers] = useState<Farmer[]>([]);

    useEffect(() => {
        setFarmers(farmData);
        console.log("Farmers loaded:", farmData);
    }, []);
    console.log("What is it:", farmers)

    return (
        <section className="relative w-full h-screen py-10 overflow-hidden">
            <motion.div
                style={{ backgroundImage: `url('/farmbg.jpg')` }}
                className="absolute inset-0 z-0 bg-cover bg-center"
                initial={{ scale: 1. }}
                animate={{ scale: 1.05 }}
                transition={{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                <div className="absolute inset-0 bg-black/70 z-0 backdrop-blur-sm">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-white">
                        <div className="text-center mb-12">
                            <h1 className="text-semi-bold font-serif tracking-wide my-10 text-4xl">
                                🌾 Meet Our Farmers
                            </h1>
                            <p className="font-serif text-2xl text-neutral-100">Celebrating the hands that feed the world - one farmer at a time.</p>
                        </div>

                        <div className="mb-12 flex justify-center">
                            <div className="bg-green-800/70 backdrop-blur-xl p-6 rounded-3xl shadow-lg shadow-zinc-100 flex flex-col items-center justify-center text-center max-w-md">
                                <Image
                                    src="/Victor.jpg"
                                    alt="Victor"
                                    width={120}
                                    height={120}
                                    className="rounded-full mb-4 shadow-lg shadow-neutral-900"
                                />
                                <h3 className="font-serif text-2xl">Victor Micheals</h3>
                                <p className="text-green-300"> 🌟 Farmer of the Month - April </p>
                                <p className="text-serif mt-4 text-zinc-200"></p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4">
                            <TooltipProvider >
                                {farmers.map((farmer) => (
                                    <Tooltip key={farmer.id}>
                                        <TooltipTrigger asChild>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className={cn(
                                                    "bg-neutral-200/90 backdrop-blur-lg text-black p-4 rounded-2xl shadow-md hover:shadow-green-400 transition-all hover:cursor-pointer"
                                                )}
                                            >
                                                <Image
                                                    src={farmer.image}
                                                    alt={farmer.name}
                                                    width={200}
                                                    height={200}
                                                    className="w-full h-44 object-cover rounded-xl"
                                                />
                                                <div className="mt-12">
                                                    <h2 className="font-serif text-4xl">{farmer.name}</h2>
                                                    <p className="text-sm text-gray-700">{farmer.location}</p>
                                                    <Badge variant={"outline"} className="mt-4">{farmer.products}</Badge>
                                                </div>
                                            </motion.div>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-neutral-700 text-white">
                                            {farmer.Bio}
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </TooltipProvider>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}