
import Image from "next/image"
import { Button } from "./ui/button"
import AnimatedCounter from "./ui/counter"
import MarqueeImage from "./ui/spin"
import Line from "./ui/line"



export default function Header() {

    const stats = [
        {
            to: 200,
            label: "International Brands",
        },
        {
            to: 2000,
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
                <div className="w-[500] items-start justify-start py-20 flex flex-col gap-4">
                    <h1 className="font-black text-6xl">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    <p className="font-light text-gray-700 text-[14px]">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Button variant="default" className="rounded-4xl pl-20 pr-20 py-7 pb-7 text-[18px] mt-4.5">
                        Shop now
                    </Button>
                    <div className=" mt-5">
                        <div className="flex gap-4 items-start ">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-start p-2.5">
                                    <section className="w-36 text-start">
                                        <AnimatedCounter
                                            to={stat.to}
                                            format="short"
                                            className="text-black font-bold text-4xl"
                                        />
                                        <p className="text-[12px]">{stat.label}</p>
                                    </section>

                                    {/* Tambahin line kecuali di item terakhir */}
                                    {i < stats.length - 1 && (
                                        <Line variant="vertical" length={60} color="black" thickness={2} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
                <div className="pl-16 flex">
                    <Image
                        src="/asset/hero.png"
                        alt="Hero section"
                        width={600}
                        height={400}
                        priority
                    />
                    <div >
                        {/* Gambar kiri atas */}
                        <Image
                            src="/asset/Vector.png"
                            alt="Hero Left"
                            width={104}
                            height={104}
                            priority
                            className="absolute top-50 left-280"
                        />

                        {/* Gambar kanan bawah */}
                        <div>
                            <Image
                                src="/asset/Vector.png"
                                alt="Hero Right"
                                width={54}
                                height={54}
                                priority
                                className="absolute bottom-40 right-150 "
                            />
                        </div>
                    </div>
                </div>
            </div >
            <MarqueeImage />
        </>
    )
};
