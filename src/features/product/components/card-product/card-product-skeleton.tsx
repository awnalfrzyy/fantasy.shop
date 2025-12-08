import { Skeleton } from "@/components/ui/skeleton";

export default function CardProductSkeleton() {
    return (
        <div className="border-none rounded-md p-4">
            <Skeleton className="w-full h-48 mb-4" />
            <Skeleton className="w-3/4 h-6 mb-2" />
            <Skeleton className="w-1/2 h-6" />
        </div>
    );
}