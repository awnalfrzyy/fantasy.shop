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
                    return res.json();
                }}
                columnsCount={4}
            />
            <SpinHorizontal />
        </div>
    )
}