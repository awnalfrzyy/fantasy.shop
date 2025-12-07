'use client'

import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import CardRating from "../ui/card-rating";

export default function SectionFour() {

    const [index, setIndex] = useState(0);
    const [ratings, setRatings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                setLoading(true);
                const res = await fetch('http://localhost:4000/products');
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const data = await res.json();
                console.log('Fetched ratings data:', data);
                setRatings([]);
                setError(null);
            } catch (err) {
                console.error('Error fetching ratings:', err);
                setError(err instanceof Error ? err.message : 'An error occurred');
                setRatings([]);
            } finally {
                setLoading(false);
            }
        };
        fetchRatings();
    }, []);

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? (ratings.length - 1) : prev - 1))
    }

    const handleNext = () => {
        setIndex((prev) => (prev === ratings.length - 1 ? 0 : prev + 1))
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
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            <div className="py-20 flex flex-col gap-4 w-full overflow-hidden">
                <div className="flex gap-6 justify-start  ">
                    {/* {ratings.map((rating) => (
                        <CardRating
                            key={rating.id}
                            rating={rating.rating}
                            name={rating.name}
                            comment={rating.comment}
                        />
                    ))} */}
                </div>
            </div>
        </div>

    )
};
