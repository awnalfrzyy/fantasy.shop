'use client'

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import CardRating from "../ui/card-rating";
import { Rating } from "@/data/rating";



export default function SectionFour() {

    const [, setIndex] = useState(0)

    const items = ["Slide 1", "Slide 2", "Slide 3"]

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
    }





    return (
        <div className="h-screen bg-white p-14  py-20">
            <div className="flex items-center mt-20">
                <h1 className="text-4xl font-bold">
                    OUR HAPPY CUSTOMERS
                </h1>

                {/* tombol navigasi */}
                <div className="ml-auto flex gap-3">
                    <Button variant="ghost" onClick={handlePrev}>
                        <ArrowLeft size={24} color="#000000" />
                    </Button>
                    <Button variant="ghost" onClick={handleNext}>
                        <ArrowRight size={24} color="#000000" />
                    </Button>
                </div>


            </div>
            <div className="py-20 flex flex-col gap-4 w-full overflow-hidden">
                <div className="flex gap-6 justify-start  ">
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
        </div>

    )
};
