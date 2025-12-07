export interface AnimatedCounterProps {
    from?: number
    to: number
    duration?: number
    className?: string
    format?: "plain" | "rupiah" | "short"
}