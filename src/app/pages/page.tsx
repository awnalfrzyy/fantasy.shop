'use client'

import Header from "@/features/homepage/components/container-header/header";
import SpinHorizontal from "@/features/homepage/components/brands-spin/spin-horizontal";
import ContainerWrapperProduct from "@/features/homepage/components/container-wapper-product/container-wapper-product";

export default function BerandaPage() {
    return (
        <div className="h-full">
            <Header />
            <ContainerWrapperProduct
                title="Featured Products"
                getData={async () => {
                    const res = await fetch('http://localhost:4000/products');
                    if (!res.ok) {
                        throw new Error('Failed to fetch products');
                    }

                    const data = await res.json();
                    // Map API response to component's expected format
                    return data.map((item: any) => ({
                        id: String(item.id),
                        name: item.title,
                        imageSrc: item.image_url,
                        imageAlt: item.title,
                        price: item.price,
                        rating: item.rating,
                    }));
                }}
                columnsCount={4}
                limit={4}
            />
            <SpinHorizontal />
        </div>
    )
}