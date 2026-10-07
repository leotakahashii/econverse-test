import type { Product } from '../types/products'
import './ProductCard.scss'

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="product-card">
            <img className="product-card__image" src={product.photo} alt={product.productName} />
            <h3 className="product-card__name">{product.productName}</h3>
            <p>{product.price}</p>
            <button type="button">Comprar</button>
        </article>
    )
}