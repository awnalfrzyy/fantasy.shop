===== CARA PEMAKAIAN =====

"use client"

import { useDynamicRoute } from "@/hooks/useDynamicRoute";

export default function ProductPage() {
const { params, getQueryParam, navigate } = useDynamicRoute();

    // Contoh URL: /product/123?ref=home
    const productId = params[1]; // '123'
    const ref = getQueryParam("ref"); // 'home'

    return (
        <div>
            <h1>Product ID: {productId}</h1>
            <p>Ref: {ref}</p>
            <button onClick={() => navigate("/product")}>Back to Products</button>
        </div>
    );

}

//Cara pemakaian berdasarkan navigasi dinamis berdasarkan ID

<button
onClick={() => navigate(`/product/${productId}/edit`)}

> Edit Product
> </button>

//ambil banyak query params
const sort = getQueryParam("sort");
const filter = getQueryParam("filter");
