'use client';

import { Farmer } from "@/types/types";
import { useEffect, useState } from "react";
import { farmers as farmData } from "@/constants/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./ui/badge";


export default function FarmersCarousel() {
    const [farmers, setFarmers] = useState<Farmer[]>([])

    useEffect(() => {
        setFarmers(farmData)
    }, [])
    return (
        <section className="relative md:hidden w-full h-fit py-8 px-8">
            <h2 className="text-center font-serif mb-6 text bg-zinc-200 text-3xl">
                🌾 Meet Our Farmers
            </h2>

            <motion.div
                whileTap={{ cursor: "grabbing" }}
                drag="x"
                dragConstraints={{ right: 0, left: 0 }}
                className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            >

                {farmers.map((farmer) => (
                    <motion.div
                        key={farmer.id}
                        whileHover={{ scale: 1.08 }}
                        className="min-w-80% snap-center bg-zinc-200 rounded-2xl shadow-md hover:shadow-green-900/50 backdrop-blur-lg p-4 transition-all"
                    >
                        <Image
                            src={farmer.image}
                            alt={farmer.name}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <h3 className="font-serif text-2xl text-black">{farmer.name}</h3>
                        <p className="text-sm text-gray-700">{farmer.location}</p>
                        <Badge className="mt-2" variant={"outline"}>{farmer.Bio}</Badge>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

