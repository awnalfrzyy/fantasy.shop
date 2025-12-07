'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

export default function SectionThree() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const res = await fetch('http://localhost:4000/products');
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const data = await res.json();
                console.log('Fetched products:', data);
                const products = Array.isArray(data) ? data.slice(0, 4) : [];
                setProducts(products);
                setError(null);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError(err instanceof Error ? err.message : 'An error occurred');
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <div className="bg-white h-screen flex justify-center mt-20">
                <div className="bg-[#F0F0F0] h-[766px] w-[1239px] rounded-4xl p-10">
                    <h1 className="text-4xl font-black text-center mb-10">
                        BROWSE BY DRESS STYLE
                    </h1>

                    {loading && <p className="text-center">Loading...</p>}
                    {error && <p className="text-center text-red-500">{error}</p>}

                    <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px]">
                        <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden">
                            <Image src={"/asset/image-11.png"} alt="herpo" className="object-cover w-full h-full "
                                width={600} height={600} />
                            <h1 className="absolute top-4  left-6 font-bold text-4xl text-black z-10">Casual</h1>
                        </div>

                        <div className="col-span-2 row-span-1 relative rounded-3xl overflow-hidden">
                            <Image src={"/asset/image-13.png"} alt="herpo" className="object-cover w-full h-full "
                                width={600} height={600} />
                            <h1 className="absolute top-4 left-6 font-bold text-4xl text-black z-10">Formal</h1>
                        </div>

                        <div className=" col-span-2 row-span-1 relative  rounded-3xl overflow-hidden">
                            <Image src={"/asset/image-12.png"} alt="herpo" className="object-cover w-full h-full "
                                width={600} height={600} />
                            <h1 className="absolute top-4 left-6 font-bold text-4xl text-black z-10">Party</h1>
                        </div>

                        <div className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden">
                            <Image
                                src="/asset/image-14.png"
                                alt="herpo"
                                className="object-cover w-full h-full"
                                width={600}
                                height={600}
                            />
                            <h1 className="absolute top-4 flex justify-items-start left-6 font-bold text-4xl text-black z-10">
                                Gym
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-20 w-20">

            </div>
        </>
    )
};
