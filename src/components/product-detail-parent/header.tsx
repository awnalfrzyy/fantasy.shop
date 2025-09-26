'use client'

import Line from '../ui/line';
import { Button } from '../ui/button';
import StarRating from '../ui/star-rating';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Check } from 'lucide-react';

export default function HeaderProductDetail() {
    const [quantity, setQuantity] = useState(0);

    const handleMinus = () => {
        setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handlePlus = () => {
        setQuantity((prev) => prev + 1);
    };

    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const sizeOptions = [
        { title: "small" },
        { title: "Medium" },
        { title: "Large" },
        { title: "X Large" },

    ];

    const colors = [
        { name: "amber", className: "bg-amber-500" },
        { name: "red", className: "bg-red-500" },
        { name: "blue", className: "bg-blue-500" },
    ];


    return (
        <div>
            <div className="h-screen flex pr-18 pl-18 gap-10 ">
                {/* Left Side - Thumbnail + Main Image */}
                <section className="flex gap-3.5">
                    <div className="flex flex-col gap-3.5">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-[158px] w-[152px] bg-transparent">
                                <Image
                                    src="/asset/image-1.png"
                                    alt="product"
                                    width={444}
                                    height={530}
                                    className="bg-neutral-400 object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="bg-transparent w-[430px] h-[505px]">
                        <Image
                            src="/asset/image-1.png"
                            alt="product"
                            width={444}
                            height={530}
                            className="bg-neutral-400 object-cover w-full h-full"
                        />
                    </div>
                </section>

                {/* Right Side - Detail */}
                <section className="flex flex-col gap-4.5">
                    <h1 className="font-black text-4xl">
                        One Life Graphic T-shirt
                    </h1>
                    <StarRating rating={5} />
                    <h1 className="text-2xl font-black">00000</h1>
                    <p className="font-medium text-sm">
                        This graphic t-shirt which is perfect for any occasion.
                        Crafted from a soft and breathable fabric, it offers superior comfort and style.
                    </p>

                    {/* Line */}
                    <Line thickness={2} variant="horizontal" length={560} color="#00000021" />

                    {/* Select Color */}
                    <div className="flex flex-col gap-2">
                        <p className="font-medium text-sm">Select Color</p>
                        <div className="flex flex-row gap-3">
                            {/* Amber Circle */}
                            {colors.map((color) => (
                                <div
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={`rounded-full w-9 h-9 flex items-center justify-center cursor-pointer ${color.className}`}
                                >
                                    {selectedColor === color.name && (
                                        <Check size={20} color="white" strokeWidth={3} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Line thickness={2} variant="horizontal" length={560} color="#00000021" />

                    {/* Choose Size */}
                    <div className="flex flex-col gap-3.5">
                        <p className="font-medium text-sm">Choose Size</p>
                        <div className="flex gap-2">
                            {sizeOptions.map((size) => (
                                <Button
                                    key={size.title}
                                    onClick={() => setSelectedSize(size.title)}
                                    variant="default"
                                    className={`rounded-full p-6 flex items-center justify-center 
              ${selectedSize === size.title
                                            ? "bg-black text-white"
                                            : "bg-gray-100 text-black"
                                        }`}
                                >
                                    {size.title}
                                    {selectedSize === size.title && (
                                        <Check size={20} className="ml-2" strokeWidth={3} />
                                    )}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <Line thickness={2} variant="horizontal" length={560} color="#00000021" />

                    {/* Quantity + Order */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-8 border rounded-4xl px-3 py-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleMinus}
                                disabled={quantity === 0}
                            >
                                <Minus size={20} />
                            </Button>
                            <span className="text-lg font-medium w-6 text-center">{quantity}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handlePlus}
                            >
                                <Plus size={20} />
                            </Button>
                        </div>
                        <Button className="pb-5 py-6 pr-36 pl-36 rounded-4xl font-bold bg-black text-white">
                            Order Now
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
