import SidebarFilter from '../sidebar-filter';
import { products } from '@/data/product';
import CardProduct from '../ui/card-product';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function SectionCategori() {
    return (
        <div className="flex w-full relative">
            {/* Sidebar kiri */}
            <div className="w-80 justify-center flex-shrink-0 h-full overflow-y-auto border-r border-gray-200 py-5 px-3">
                <SidebarFilter />
            </div>

            {/* Konten kanan scrollable */}
            <div className="flex-1 h-full overflow-y-auto p-5 flex flex-col">
                <div className="grid grid-cols-3 gap-6 mb-10">
                    {products.map((product) => (
                        <CardProduct
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            rating={product.rating}
                        />
                    ))}
                </div>

                <div className="mt-auto">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}
