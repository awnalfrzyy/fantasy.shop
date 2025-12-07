export interface CardProductProps {
    title: string;
    image: string;
    price: number;
    rating: number;
    className?: string;
    onClick?: () => void;
}