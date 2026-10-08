import type { Product } from '../types/products'
import './ProductCard.scss'
import { formatPrice } from '../utils/formatPrice'

interface ProductCardProps {
    product: Product
    onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
    return (
        <article className="product-card" onClick={() => onSelect(product)}>
            <img className="product-card__image" src={product.photo} alt={product.productName} />
            <h3 className="product-card__name">{product.productName}</h3>
            <p className="product-card__price">{formatPrice(product.price)}</p>
            <button className="product-card__button" type="button">Comprar</button>
        </article>
    )
}