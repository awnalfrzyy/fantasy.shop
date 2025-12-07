import CardProduct from '../../../product/components/card-product/card-product'
import { ContainerWrapperProductProps } from './container-wapper-product';

export default function ContainerWrapperProduct({ title, getData, products, columnsCount }: ContainerWrapperProductProps) {
    return (
        <div className="w-full my-10">
            {/* <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className={`grid gap-6 ${columnsCount === 2 ? 'grid-cols-2' : columnsCount === 3 ? 'grid-cols-3' : columnsCount === 4 ? 'grid-cols-4' : 'grid-cols-4 md:grid-cols-3 sm:grid-cols-2'}`}>
            {products.map((product) => (
                <CardProduct
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    rating={product.rating}
                    price={product.price}
                    imageSrc={product.imageSrc}
                    imageAlt={product.imageAlt}
                />
            ))}
        </div> */}
        </div>
    )
}