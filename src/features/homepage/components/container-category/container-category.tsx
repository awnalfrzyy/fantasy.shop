import { ContainerCategoryProps } from './container-category-props'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

function colClass(colSpan?: string | number) {
    return colSpan === 2 ? 'col-span-2' : 'col-span-1'
}

function rowClass(rowSpan?: string | number) {
    return rowSpan === 2 ? 'row-span-2' : 'row-span-1'
}

export default function ContainerCategory({ tiles, gridHeight = 'h-[600px]' }: ContainerCategoryProps) {
    // Render the provided tiles; each tile can specify colSpan/rowSpan (1 or 2).
    // Using explicit class helpers so Tailwind picks up classes at build time.
    return (
        <section className={`grid grid-cols-3 grid-rows-2 gap-4 ${gridHeight}`}>
            {tiles.map((tile, idx) => (
                <Card
                    key={idx}
                    className={`relative overflow-hidden rounded-3xl ${colClass(tile.colSpan)} ${rowClass(tile.rowSpan)}`}
                >
                    <Image
                        src={tile.src}
                        alt={tile.alt ?? tile.title ?? `category-${idx}`}
                        className="object-cover w-full h-full"
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                    />

                    {tile.title && (
                        <h2 className="absolute top-4 left-6 z-10 text-4xl font-bold text-black">
                            {tile.title}
                        </h2>
                    )}
                </Card>
            ))}
        </section>
    )
}