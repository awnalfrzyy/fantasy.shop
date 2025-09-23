import { Card, CardTitle, CardDescription } from "../ui/card";
import StarRating from "./star-rating";
import { BadgeCheck } from "lucide-react";

interface CardRatingProps {
    name: string;
    comment: string | number;
    rating: number;
}



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
