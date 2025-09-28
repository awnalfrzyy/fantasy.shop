import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/data/product"


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import HeaderProductDetail from "@/components/product-detail-parent/header"



interface ProductDetailProps {
    params: { id: string }
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
    const product = products.find((p) => p.id === Number(params.id))

    if (!product) {
        return notFound()
    }

    return (
        <div className=" h-screen relative">
            <div className="py-8 px-8 pl-18">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={`/product/${product.id}`}>{product.title}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* lempar product ke komponen child */}
            <HeaderProductDetail product={product} />


        </div>
    )
}
