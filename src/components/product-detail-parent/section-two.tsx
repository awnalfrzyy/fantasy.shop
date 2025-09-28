import { Button } from "../ui/button"
import CardProduct from "../ui/card-product"
import { products } from "@/data/top-selling"

interface SectionTwoProductDetailProps {
    currentProductId: number

}

export default function SectionTwoProductDetail({
    currentProductId,

}: SectionTwoProductDetailProps) {
    return (
        <div className="relative py-20">
            <h1 className="text-center text-black font-black text-5xl p-5 mb-10 mt-[-36]">
                YOU MIGHT ALSO LIKE
            </h1>

            <div className="flex flex-wrap justify-center gap-6">
                {products
                    .filter((p) => p.id !== currentProductId)
                    .map((p: typeof products[number]) => (
                        <CardProduct
                            key={p.id}
                            title={p.title}
                            image={p.image}
                            price={p.price}
                            rating={p.rating}
                        />
                    ))}
            </div>


            <div className="p-10 justify-center items-center flex">
                <Button
                    variant="outline"
                    className="p-6 pr-20 pl-20 rounded-4xl"
                >
                    View All
                </Button>
            </div>
        </div>
    )
}
