import * as React from 'react';
interface LineProps {
    variant?: "horizontal" | "vertical"
    length?: number
    color?: string
    thickness?: number
}

export default function Line({
    variant = "horizontal",
    length = 10,
    color = "black",
    thickness = 1,
}: LineProps) {
    return (
        <svg
            width={variant === "horizontal" ? length : thickness}
            height={variant === "vertical" ? length : thickness}
            xmlns="http://www.w3.org/2000/svg"
        >
            {variant === "horizontal" ? (
                <line
                    x1="0"
                    y1={thickness / 1}
                    x2={length}
                    y2={thickness / 1}
                    stroke={color}
                    strokeWidth={thickness}
                />
            ) : (
                <line
                    x1={thickness / 1}
                    y1="0"
                    x2={thickness / 1}
                    y2={length}
                    stroke={color}
                    strokeWidth={thickness}
                />
            )}
        </svg>
    )
}
