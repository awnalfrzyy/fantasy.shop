"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import type SpinProps from "./spin-horizontal-props"

export default function SpinHorizontal({
    duration = 20,
    getData,
    imageSize = { width: 200, height: 30 },
    backgroundColor = "black",
    speed = 20,
    duplicate = true,
    duplicateCount = 2,
    gap = 40,
}: SpinProps) {
    const [brands, setBrands] = useState<{ src: string; alt: string }[]>([])

    useEffect(() => {
        if (getData) {
            getData().then((data) => setBrands(data))
        }
    }, [getData])

    const duplicatedBrands = duplicate
        ? Array(duplicateCount).fill(brands).flat()
        : brands

    return (
        <div
            className="overflow-hidden w-full py-4"
            style={{ backgroundColor }}
        >
            <motion.div
                className="flex"
                style={{ gap }}
                animate={{ x: ["0%", `-${50 * duplicateCount}%`] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration,
                }}
            >
                {duplicatedBrands.map((img, i) => (
                    <Image
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={imageSize.width}
                        height={imageSize.height}
                        className="object-contain"
                    />
                ))}
            </motion.div>
        </div>
    )
}
