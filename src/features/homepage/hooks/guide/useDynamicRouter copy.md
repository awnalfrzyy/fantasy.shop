"use client"

import { useDynamicRoute } from "@/hooks/useDynamicRoute";

export default function ProductPage() {
// Kita tahu segment dynamic route bernama "id"
const { params, getQueryParam, navigate } = useDynamicRoute<{ id: string }>(["id"]);

    const productId = params.id; // '123'
    const ref = getQueryParam("ref"); // 'home'

    return (
        <div>
            <h1>Product ID: {productId}</h1>
            <p>Referrer: {ref}</p>

            <button onClick={() => navigate("/product")}>
                Back to Products
            </button>

            <button onClick={() => navigate(`/product/${productId}/edit`)}>
                Edit Product
            </button>
        </div>
    );

}

const { params } = useDynamicRoute<{ category: string; id: string }>(["category", "id"]);
console.log(params.category, params.id);
