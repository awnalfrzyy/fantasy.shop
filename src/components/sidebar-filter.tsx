'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils"
import Line from "./ui/line";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Check, SlidersVertical } from "lucide-react";
import { Slider } from "./ui/slider";


type SliderProps = React.ComponentProps<typeof Slider>



export default function SidebarFilter({ className, ...props }: SliderProps) {

    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const colors = [
        { name: "amber", className: "bg-amber-500" },
        { name: "red", className: "bg-red-500" },
        { name: "blue", className: "bg-blue-500" },

    ];

    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const sizeOptions = [
        { title: "small" },
        { title: "Medium" },
        { title: "Large" },
        { title: "X Large" },

    ];


    return (
        <div className="w-[295px] relative rounded-4xl bg-white border-2 border-black/10 p-5">
            <div className="flex justify-between">
                <h1>Filter</h1>
                <SlidersVertical size={24} color="black" />
            </div>
            <div className="py-5">
                <Line thickness={2} length={250} color="black" />
            </div>
            <section className="flex flex-col gap-0">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>T-shirt</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Shorts</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Shirts</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Hoddie</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Jeans</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>


            <div className="py-5">
                <Line thickness={2} length={250} color="black" />
            </div>


            <section className="">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Price</AccordionTrigger>
                        <AccordionContent className="py-10">
                            <Slider
                                defaultValue={[50]}
                                max={100}
                                step={1}
                                className={cn("w-[100%]", className)}
                                {...props}
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>



            <div className="py-5">
                <Line thickness={2} length={250} color="black" />
            </div>


            <section className="">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Price</AccordionTrigger>
                        <AccordionContent className="py-10">
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
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>


            <div className="py-5">
                <Line thickness={2} length={250} color="black" />
            </div>


            <section className="">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Price</AccordionTrigger>
                        <AccordionContent className="py-0">
                            <div className="w-full gap-2 grid grid-cols-2 ">
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
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            <div className="py-5">
                <Line thickness={2} length={250} color="black" />
            </div>

            <section className="flex flex-col gap-0">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>T-shirt</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Shorts</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Shirts</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Hoddie</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Jeans</AccordionTrigger>
                        <AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
            <div className="py-5">
                <Button className="pr-22 pl-22 py-7 rounded-full">Apply Filter</Button>
            </div>

        </div>
    )
};
