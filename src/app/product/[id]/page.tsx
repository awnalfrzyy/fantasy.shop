import { products } from "@/data/product"
import HeaderProductDetail from "@/components/product-detail-parent/header"
import SectionTwoProductDetail from "@/components/product-detail-parent/section-two"
import SectionDetail from "@/components/product-detail-parent/section"


interface ProductDetailProps {
    params: { id: string }
}

export default function ProductDetailPage({ params }: ProductDetailProps) {

    const product = products.find((p) => p.id === Number(params.id))

    if (!product) return <div>Product not found</div>

    return (
        <div>
            <HeaderProductDetail product={product} />
            <SectionTwoProductDetail
                currentProductId={product.id}

            />
            <SectionDetail />
        </div>
    )
}
