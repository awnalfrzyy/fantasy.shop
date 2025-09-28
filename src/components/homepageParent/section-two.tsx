import { Button } from "../ui/button"
import CardProduct from "../ui/card-product"
import { products } from "@/data/top-selling"
import Link from "next/link"

export default function SectionTwo() {
    return (
        <div className="h-screen">
            <h1 className="text-center text-black font-black text-5xl p-5 mb-10 mt-[-36]">
                TOP SELLING
            </h1>
            <div className="justify-center gap-6 flex">
                {products.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <CardProduct
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            rating={product.rating}

                        />
                    </Link>
                ))}
            </div>
            <div className="p-10 justify-center items-center flex">
                <Button variant="outline" className="p-6 pr-20 pl-20 rounded-4xl">
                    View All
                </Button>
            </div>
        </div>
    )
}
