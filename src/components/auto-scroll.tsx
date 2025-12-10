import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface AutoScrollProps {
    targetId: string;
    label?: string;
    className?: string;
}

export function AutoScroll({ targetId, label = "Scroll Down", className }: AutoScrollProps) {
    const handleClick = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Button
            variant="outline"
            size="lg"
            className={`flex flex-col items-center justify-center  rounded-full p-5${className}`}
            // className={className}
            onClick={handleClick}
        >
            <ChevronDown size={54} />
            {/* <span className="text-xs mt-1">{label}</span> */}
        </Button>
    );
}