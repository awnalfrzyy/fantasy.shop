// components/CardProduct.tsx
import { CardContent, CardTitle, } from "./card";
import StarRating from "./star-rating";
import Image from "next/image";

interface CardProductProps {
    title: string;
    image: string;
    price: number | string;
    rating: number;

}

export default function CardProduct({
    title,
    image,
    price,
    rating,
}: CardProductProps) {
    return (
        <div className="bg-transparent rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-[275px] h-[268px] bg-gray-100 flex items-center justify-center overflow-hidden rounded-2xl">
                <Image
                    src={image}
                    alt={title}
                    width={295}
                    height={308}
                    className="object-cover w-full h-full "
                />
            </div>

            {/* Content */}
            <CardContent className="p-4 ">
                <CardTitle className="text-lg font-semibold line-clamp-2">
                    {title}
                </CardTitle>

                {/* Star Rating */}
                <div className="flex items-center mt-2 space-x-2">
                    <StarRating rating={rating} />
                    <span className="text-sm text-gray-500">{rating}/5</span>
                </div>

                {/* Price */}
                <p className="text-red-500 font-bold mt-2 text-2xl flex items-start">
                    <span className="text-sm align-top mr-1">Rp.</span>
                    {price}
                </p>


            </CardContent>
        </div>
    );
}
