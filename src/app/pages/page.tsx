'use client'

import Header from "@/features/homepage/components/container-header/header";
import ContainerWrapperProduct from "@/features/homepage/components/container-wapper-product/container-wapper-product";
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

export default function BerandaPage() {
    return (
        <div className="h-full flex flex-col gap-20">
            <Header />
            <ProductSection title="NEW ARRIVALS" />
            <ProductSection title="TOP SELLING" />
            {/* <SpinHorizontal /> */}
        </div>
    );
}
