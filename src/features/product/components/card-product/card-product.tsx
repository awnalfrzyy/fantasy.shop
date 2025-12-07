import Image from "next/image";
import { CardContent, CardTitle, Card } from "../../../../components/ui/card";
import StarRating from '../rating/star-rating'
import { CardProductProps } from "./card-product-props";

export default function CardProduct({
    title,
    image,
    price,
    rating, }: CardProductProps) {
    return (
        <Card className="bg-transparent rounded-lg overflow-hidden cursor-pointer border-none shadow-none">
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

            <CardContent className="p-4  ">
                <CardTitle className="text-lg font-semibold line-clamp-2">
                    {title}
                </CardTitle>

                <div className="flex items-center mt-2 space-x-2">
                    <StarRating rating={rating} size={14} />
                    <span className="text-sm text-gray-500">{rating}/5</span>
                </div>

                {/* Price */}
                <p className="text-red-500 font-bold mt-2 text-2xl flex items-start">
                    <span className="text-sm align-top mr-1">Rp.</span>
                    {price}
                </p>
            </CardContent>
        </Card>
    );
}