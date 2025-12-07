import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import StarRating from "../rating/star-rating";
import { BadgeCheck } from "lucide-react";
import { CardRatingProps } from "./card-rating-props";

export default function CardRating({
    name,
    comment,
    rating
}: CardRatingProps) {
    return (
        <Card className="relative p-4">
            <StarRating rating={rating} />
            <CardTitle className="flex gap-2.5 items-center">
                {name}
                <BadgeCheck size={24} fill="#00B109FF" color="#ffffff" />
            </CardTitle>
            <CardDescription className="w-80">
                {comment}
            </CardDescription>
        </Card>
    )
};
