'use client'

import CardProduct from '../../../product/components/card-product/card-product'
import { ContainerWrapperProductProps, ProductCardData } from './container-wapper-product-props'
import { useEffect, useState } from 'react'
import CardProductSkeleton from '@/features/product/components/card-product/card-product-skeleton'
import { useRouter } from 'next/navigation'

export default function ContainerWrapperProduct({ title, getData, products, columnsCount, limit, className }: ContainerWrapperProductProps) {
    // Ensure mobile (default) shows 2 columns. Adjust md/lg based on requested columnsCount.
    const gridClasses = (() => {
        const cols = columnsCount ?? 4
        // default/mobile: 2 columns
        let classes = 'grid-cols-2'
        // medium screens: 3 columns when requested
        if (cols >= 3) classes += ' md:grid-cols-3'
        // large screens: 4 columns when requested
        if (cols >= 4) classes += ' lg:grid-cols-4'
        return classes
    })()

    const [items, setItems] = useState<ProductCardData[]>(products ?? [])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    // Redirect to a dedicated no-data page when an error occurs
    useEffect(() => {
        if (error) {
            router.replace('/data-nodisplay')
        }
    }, [error, router])

    useEffect(() => {
        // If products prop is provided and changes, use it.
        if (products && products.length > 0) {
            setItems(products)
            return
        }

        // Otherwise, if getData is provided, fetch items on mount.
        if (getData) {
            let mounted = true
            setLoading(true)
            getData()
                .then((res) => {
                    if (!mounted) return
                    setItems(res)
                })
                .catch((err) => {
                    if (!mounted) return
                    setError(String(err))
                })
                .finally(() => {
                    if (!mounted) return
                    setLoading(false)
                })

            return () => {
                mounted = false
            }
        }
    }, [getData, products])

    return (
        <div className={`w-full px-20 ${className}`}>
            <h2 className="text-4xl font-bold mb-6 text-center">{title}</h2>
            {loading ? (
                <div className={`grid gap-6 ${gridClasses}`}>
                    {Array.from({ length: limit ?? 4 }).map((_, i) => (
                        <CardProductSkeleton key={i} />
                    ))}
                </div>
            ) : error ? (
                null
            ) : items.length === 0 ? (
                <div className="py-8 text-center">No products available.</div>
            ) : (
                <div className={`grid gap-6 ${gridClasses}`}>
                    {items.slice(0, limit).map((product) => (
                        <CardProduct
                            key={product.id}
                            title={product.name}
                            image={product.imageSrc}
                            rating={product.rating}
                            price={product.price}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}