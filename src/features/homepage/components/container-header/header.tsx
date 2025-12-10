"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "../counter/counter"
import Line from "@/components/ui/line"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
    const router = useRouter();
    const [files, setFiles] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const res = await fetch("http://localhost:4000/asset/files", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        paths: [
                            "/image/hero.png",
                            "/vector/Vector.png"
                        ]
                    }),
                });

                const data = await res.json();
                setFiles(data);
            } catch (error) {
                console.error("Failed to fetch images:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFiles();
    }, []);

    const stats = [
        {
            to: 200,
            label: "International Brands",
        },
        {
            to: 800,
            label: "High-Quality Products",
        },
        {
            to: 30000,
            label: "Happy Customers",
        },
    ]

    return (

        <>
            <div className="h-screen bg-[#EEECED] flex pl-20 pr-20">
                <div className="w-[600] items-start justify-start py-20 flex flex-col gap-4">
                    <h1 className=" text-6xl" style={{ fontFamily: "Integral CF, sans-serif", fontWeight: "900" }}>
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    <p className="font-light text-gray-700 text-sm">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Button variant="default" className="rounded-full py-5 px-20 text-[18px] mt-4.5"
                        onClick={() => router.push("/categori-page")}>
                        Shop now
                    </Button>
                    <div className=" mt-5">
                        <div className="flex gap-3 items-start ">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-start p-1">
                                    <section className="w-36 text-start">
                                        <AnimatedCounter
                                            to={stat.to}
                                            format="short"
                                            className="text-black font-bold text-4xl"
                                        />
                                        <p className="text-[12px]">{stat.label}</p>
                                    </section>

                                    {i < stats.length - 1 && (
                                        <Line variant="vertical" length={60} thickness={2} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
                <div className="pl-16 flex">
                    {loading ? (
                        <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                            Loading images...
                        </div>
                    ) : (
                        <>
                            <Image
                                src={"/hero.png"}
                                alt="Hero section"
                                width={600}
                                height={400}
                                priority
                            />
                            <div>
                                <Image
                                    src={"/Vector.png"}
                                    alt="Hero Left"
                                    width={104}
                                    height={104}
                                    priority
                                    className="absolute top-50 left-280"
                                />

                                <div>
                                    <Image
                                        src={"/Vector.png"}
                                        alt="Hero Right"
                                        width={54}
                                        height={54}
                                        priority
                                        className="absolute bottom-40 right-150"
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div >
        </>
    )
};
