"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { getBrands } from "@/data/brand"

export default function MarqueeImage() {
    const [brands, setBrands] = useState<{ src: string; alt: string }[]>([])

    useEffect(() => {
        getBrands().then(setBrands)
    }, [])

    // Gandakan array supaya scroll mulus
    const duplicatedBrands = [...brands, ...brands]

    return (
        <div className="overflow-hidden w-full bg-black py-4">
            <motion.div
                className="flex gap-40"
                animate={{ x: ["0%", "-50%"] }} // hanya geser separuh karena kita duplikat
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {duplicatedBrands.map((img, i) => (
                    <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={200}
                        height={30}
                        className="object-contain "
                    />
                ))}
            </motion.div>
        </div>
    )
}
