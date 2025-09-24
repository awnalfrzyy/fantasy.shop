import { Star } from "lucide-react";


interface StarRatingProps {
    rating: number;
    max?: number;
}

export default function StarRating({ rating, max = 5 }: StarRatingProps) {

    return (
        <div className="flex space-x-1">
            {Array.from({ length: max }).map((_, index) => (
                <Star
                    key={index}
                    className={index < rating ? "text-yellow-400" : "text-gray-300"}
                    fill={index < rating ? "#FACC15" : "none"}
                    size={14}
                />
            ))}
        </div>
    );
};

