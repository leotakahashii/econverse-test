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
            {/* Parcelamento calculado a partir do preço: 2x sem juros. */}
            <p className="product-card__installments">
                ou 2x de {formatPrice(product.price / 2)} sem juros
            </p>
            {/* Texto fixo, para que fique igual ao layout do Figma. */}
            <p className="product-card__shipping">Frete grátis</p>
            <button className="product-card__button" type="button">Comprar</button>
        </article>
    )
}