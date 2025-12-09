'use client'

import Header from "@/features/homepage/components/container-header/header";
import ContainerWrapperProduct from "@/features/homepage/components/container-wapper-product/container-wapper-product";
import ContainerCategory from "@/features/homepage/components/container-category/container-category";
import SpinHorizontal from "@/features/homepage/components/brands-spin/spin-horizontal";
import { Button } from "@/components/ui/button";

// Fungsi util untuk fetch products dan mapping
const fetchProducts = async () => {
    const res = await fetch('http://localhost:4000/products');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    return data.map((item: any) => ({
        id: String(item.id),
        name: item.title,
        imageSrc: item.image_url,
        imageAlt: item.title,
        price: item.price,
        rating: item.rating,
    }));
};

const ProductSection = ({ title }: { title: string }) => (
    <div>
        <ContainerWrapperProduct
            className="px-20"
            title={title}
            getData={fetchProducts}
            columnsCount={4}
            limit={4}
        />
        <div className="flex justify-center mb-10">
            <Button variant="outline" size="lg" className="rounded-full">See More</Button>
        </div>
    </div>
);

const tiles = [
    { src: '/image 11.png', title: 'Women', colSpan: 1, rowSpan: 1 },
    { src: '/image 12.png', title: 'New Arrivals', colSpan: 2, rowSpan: 1 },
    { src: '/image 13.png', title: 'Collections', colSpan: 2, rowSpan: 1 },
    { src: '/image 14.png', title: 'Accessories', colSpan: 1, rowSpan: 1 },
]

const DataSpin = [
    { src: '/brands/zara-logo.png', alt: 'Brand 1' },
    { src: '/brands/prada-logo.png', alt: 'Brand 2' },
    { src: '/brands/vercase-logo.png', alt: 'Brand 3' },
    { src: '/brands/gucci-logo.png', alt: 'Brand 4' },

]

export default function BerandaPage() {
    return (
        <div className="h-full flex flex-col gap-20">
            <div>
                <Header />
                <SpinHorizontal
                    backgroundColor="black"
                    duplicate
                    duration={50}
                    duplicateCount={3}
                    // imageSize="width: 150px; height: auto;"
                    gap={70}
                    getData={() => Promise.resolve(DataSpin)} />
            </div>

            <section>
                <ProductSection title="NEW ARRIVALS" />
            </section>

            <section>
                <ProductSection title="TOP SELLING" />
            </section>

            <div className="px-20 mb-10">
                <section className="bg-[#F0F0F0] pt-10 pb-10 px-10 rounded-3xl">
                    <h1 className="text-4xl font-black mb-10 text-center">SHOP BY CATEGORY</h1>
                    <ContainerCategory tiles={tiles} gridHeight="h-[600px]" />
                </section>
            </div>
        </div>
    );
}
