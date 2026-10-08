import type { Product } from '../types/products'
import   { ProductCard } from './ProductCard'
import './ProductList.scss'

interface ProductListProps {
    products: Product[]
    onSelectProduct: (product: Product) => void
}

export function ProductList({ products, onSelectProduct }: ProductListProps) {
    return (
        <section className="product-list">
            {products.map((product) => (
                <ProductCard key={product.productName} product={product} onSelect={onSelectProduct} />
            ))}
        </section>
    )
}