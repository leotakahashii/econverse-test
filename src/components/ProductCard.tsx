import type { Product } from '../types/products'

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <article>
            <img src={product.photo} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>{product.price}</p>
            <button type="button">Comprar</button>
        </article>
    )
}