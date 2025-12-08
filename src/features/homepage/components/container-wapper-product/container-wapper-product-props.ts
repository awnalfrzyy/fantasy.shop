export interface ProductCardData {
    id: string
    name: string
    rating: number
    price: number
    imageSrc: string
    imageAlt: string
}

export interface ContainerWrapperProductProps {
    title: string
    /** Optional data fetcher. If provided and `products` is empty, it will be used to load products. */
    getData?: () => Promise<ProductCardData[]>
    /** Optional preloaded products. If omitted, `getData` will be used (when available). */
    products?: ProductCardData[]
    columnsCount?: number
    /** Optional limit for number of products to display. Defaults to showing all. */
    limit?: number
    className?: string
}
