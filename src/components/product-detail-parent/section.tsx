"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CardRating from "../ui/card-rating";
import { Rating } from "@/data/rating";
import { Button } from "../ui/button";
import { ChevronDown, SlidersVertical } from "lucide-react";

export default function SectionDetail() {
    const tabs = ["Product Detail", "Rating & Reviews", "FAQs"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="relative pr-18 pl-18">
            {/* TAB HEADER */}
            <div className="w-full">
                <ul className="flex gap-24 justify-center relative border-b border-gray-300">
                    {tabs.map((tab) => (
                        <li
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`relative px-4 py-2 cursor-pointer font-medium text-2xl transition-colors ${activeTab === tab ? "text-black" : "text-gray-500"
                                }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-black rounded-full"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* TAB CONTENT */}
            <div className="py-10">
                {activeTab === "Product Detail" && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Product Information</h2>
                        <p className="text-gray-700">
                            Deskripsi produk bisa ditaruh di sini, lengkap sama material, ukuran,
                            dan fitur-fitur lainnya.
                        </p>
                    </div>
                )}

                {activeTab === "Rating & Reviews" && (
                    <div>
                        <div className="flex justify-between py-10">
                            <h1 className="font-medium text-2xl">All Reviews (327)</h1>
                            <div className="flex gap-6">
                                <Button
                                    variant="secondary"
                                    className="py-6 pr-28 pl-28 rounded-4xl"
                                >
                                    <SlidersVertical size={24} color="black" />
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="pr-10 pl-10 py-6 rounded-4xl"
                                >
                                    Latest
                                    <ChevronDown size={24} color="black" className="ml-2" />
                                </Button>
                                <Button className="pr-10 pl-10  py-6 rounded-4xl">
                                    Write a Review
                                </Button>
                            </div>
                        </div>

                        <div className="py-1 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Rating.map((rating) => (
                                    <CardRating
                                        key={rating.id}
                                        rating={rating.rating}
                                        name={rating.name}
                                        comment={rating.comment}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="p-10 flex justify-center">
                            <Button variant="outline" className="pr-14 pl-14 py-7 rounded-4xl">
                                Load more reviews
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === "FAQs" && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                        <ul className="space-y-4">
                            <li>
                                <p className="font-semibold">Q: Apakah ada garansi?</p>
                                <p className="text-gray-600">Ya, garansi 1 tahun resmi distributor.</p>
                            </li>
                            <li>
                                <p className="font-semibold">Q: Estimasi pengiriman berapa lama?</p>
                                <p className="text-gray-600">Biasanya 2-5 hari kerja.</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
