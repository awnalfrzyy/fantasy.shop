'use client'

import { useEffect, useState } from "react";
import { Button } from "../ui/button"
import CardProduct from "../ui/card-product"

export default function Section() {

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
        <div className="h-screen">
            <h1 className="text-center text-black font-black text-5xl p-5 mb-10 mt-10">
                NEW ARRIVALS
            </h1>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="justify-center gap-6 flex">
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

            <div className="p-10 justify-center items-center flex">
                <Button variant="outline" className="p-6 pr-20 pl-20 rounded-4xl ">
                    View All
                </Button>
            </div>
        </div>
    );
}
