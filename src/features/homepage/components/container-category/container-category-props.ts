export type TileData = {
    src: string
    alt?: string
    title?: string
    /** Columns this tile spans (1 or 2). Default 1. */
    // allow numeric literals (1 or 2) or plain `number` when callers don't preserve literal types
    colSpan?:  string | number
    /** Rows this tile spans (1 or 2). Default 1. */
    rowSpan?:  string | number
}

export interface ContainerCategoryProps {
    /** Array of tiles to render. Layout will render tiles in reading order. */
    tiles: TileData[]
    /** Optional fixed height for the grid (Tailwind class value). Default 'h-[600px]'. */
    gridHeight?: string
}