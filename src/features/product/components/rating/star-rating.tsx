import { Star } from "lucide-react";
import { StarProps } from './star-rating-props'

export default function StarRating({ rating, max = 5, size }: StarProps) {
    return (
        <div className="flex space-x-1">
            {Array.from({ length: max }).map((_, index) => (
                <Star
                    key={index}
                    className={index < rating ? "text-yellow-400" : "text-gray-300"}
                    fill={index < rating ? "#FACC15" : "none"}
                    size={size}
                />
            ))}
        </div>
    );
};

