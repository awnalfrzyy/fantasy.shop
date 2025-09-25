import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import HeaderProductDetail from "@/components/product-detail-parent/header"
import SectionProductDetail from "@/components/product-detail-parent/section"
import SectionTwoProductDetail from "@/components/product-detail-parent/section-two"



export default function productsDetail() {
    return (
        <div>
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
                                <Link href="/components">Components</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <HeaderProductDetail />
            <SectionProductDetail />
            <SectionTwoProductDetail />
        </div>
    )
};
