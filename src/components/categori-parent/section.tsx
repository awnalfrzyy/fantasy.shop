'use client'

import SidebarFilter from '../sidebar-filter';
import CardProduct from '../ui/card-product';
import { useEffect, useState } from 'react';
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
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const res = await fetch('http://localhost:4000/products');
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                const data = await res.json();
                console.log('Fetched categori products:', data);
                const products = Array.isArray(data) ? data : [];
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
        <div className="flex w-full relative">
            <div className="w-80 justify-center flex-shrink-0 h-full overflow-y-auto py-5 px-3">
                <SidebarFilter />
            </div>

            <div className="flex-1 h-full overflow-y-auto p-5 flex flex-col">
                {loading && <p className="text-center">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                <div className="grid grid-cols-3 gap-6 mb-10">
                    {products.map((product: any) => (
                        <CardProduct
                            key={product.id}
                            title={product.title}
                            image={product.image_url || product.image || '/asset/default-product.png'}
                            price={product.price}
                            rating={product.rating || 0}
                        />
                    ))}
                </div>

                <div className="mt-auto">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} />
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
                                <PaginationNext href="#" onClick={() => setCurrentPage(currentPage + 1)} />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}
