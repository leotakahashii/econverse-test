import type { Product } from '../types/products'
import './ProductCard.scss'

// Formata números como moeda brasileira (ex.: 15000 vira R$ 15.000,00).
// Criamos fora do componente para não recriar o formatador a cada renderização.
const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})
interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="product-card">
            <img className="product-card__image" src={product.photo} alt={product.productName} />
            <h3 className="product-card__name">{product.productName}</h3>
            <p className="product-card__price">{priceFormatter.format(product.price)}</p>
            <button className="product-card__button" type="button">Comprar</button>
        </article>
    )
}