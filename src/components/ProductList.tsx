import { useRef } from 'react'
import type { Product } from '../types/products'
import { ProductCard } from './ProductCard'
import './ProductList.scss'

// Quanto a fileira rola a cada clique: a largura de um card (304px) mais o espaço entre eles (18px).
const SCROLL_STEP = 304 + 18

interface ProductListProps {
    products: Product[]
    // Função que será chamada quando algum card da lista for clicado.
    onSelectProduct: (product: Product) => void
}

// Carrossel de produtos: uma fileira rolável com uma seta em cada lado.
export function ProductList({ products, onSelectProduct }: ProductListProps) {
    // useRef guarda uma referência direta ao elemento da fileira,
    // para que o código consiga rolar ela.
    const trackRef = useRef<HTMLElement>(null)

    // direction: -1 volta um card e 1 avança um card.
    function scroll(direction: -1 | 1) {
        // O ?. evita erro caso a referência ainda não exista.
        trackRef.current?.scrollBy({ left: direction * SCROLL_STEP, behavior: 'smooth' })
    }

    return (
        <div className="product-carousel">
            <button
                type="button"
                className="product-carousel__arrow product-carousel__arrow--prev"
                aria-label="Ver produtos anteriores"
                onClick={() => scroll(-1)}
            >
                {/* Seta desenhada em SVG. O aria-hidden esconde o desenho dos leitores de tela. */}
                {/* O viewBox "4 0 32 32" recorta o chevron do desenho original do Figma. */}
                <svg width="32" height="32" viewBox="4 0 32 32" fill="currentColor" aria-hidden="true">
                    <path d="M22.1334 10.7442L21.0009 9.59998L14.6667 16L21.0009 22.4L22.1334 21.2557L16.9317 16L22.1334 10.7442Z" />
                </svg>
            </button>

            <section className="product-list" ref={trackRef}>
                {products.map((product) => (
                    <ProductCard key={product.productName} product={product} onSelect={onSelectProduct} />
                ))}
            </section>

            <button
                type="button"
                className="product-carousel__arrow product-carousel__arrow--next"
                aria-label="Ver próximos produtos"
                onClick={() => scroll(1)}
            >
                {/* O viewBox "4 0 32 32" recorta o chevron do desenho original do Figma. */}
                <svg width="32" height="32" viewBox="4 0 32 32" fill="currentColor" aria-hidden="true">
                    <path d="M22.1334 10.7442L21.0009 9.59998L14.6667 16L21.0009 22.4L22.1334 21.2557L16.9317 16L22.1334 10.7442Z" />
                </svg>
            </button>
        </div>
    )
}