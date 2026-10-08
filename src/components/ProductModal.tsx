import type { Product } from '../types/products'
import { formatPrice } from '../utils/formatPrice'
import './ProductModal.scss'
import { useState } from 'react'

interface ProductModalProps {
    product: Product
    onClose: () => void
}

// Modal com as informações do produto clicado.
export function ProductModal({ product, onClose }: ProductModalProps) {
    // Quantidade escolhida. Começa em 1 e nunca fica abaixo disso.
    const [quantity, setQuantity] = useState(1)
    return (
        // O overlay é o fundo escuro. Então clicar nele fecha o modal.
        <div className="product-modal__overlay" onClick={onClose}>
            <div
                className="product-modal"
                // role e aria-* avisam aos leitores de tela que isto é uma janela de diálogo.
                role="dialog"
                aria-modal="true"
                aria-labelledby="product-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button className="product-modal__close" type="button" aria-label="Fechar" onClick={onClose}>
                    ×
                </button>

                <img className="product-modal__image" src={product.photo} alt={product.productName} />

                <div className="product-modal__info">
                    <h2 id="product-modal-title" className="product-modal__name">
                        {product.productName}
                    </h2>
                    <p className="product-modal__price">{formatPrice(product.price)}</p>
                    <p className="product-modal__description">{product.descriptionShort}</p>
                    <button className="product-modal__details" type="button">
                        Veja mais detalhes do produto &gt;
                    </button>

                    <div className="product-modal__actions">
                        <div className="product-modal__quantity">
                            <button
                                type="button"
                                aria-label="Diminuir quantidade"
                                // Math.max garante que a quantidade nunca passe de 1 para baixo.
                                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                            >
                                −
                            </button>
                            {/* padStart completa com zero à esquerda: 1 vira "01". */}
                            <span aria-live="polite">{String(quantity).padStart(2, '0')}</span>
                            <button
                                type="button"
                                aria-label="Aumentar quantidade"
                                onClick={() => setQuantity((current) => current + 1)}
                            >
                                +
                            </button>
                        </div>

                        <button className="product-modal__buy" type="button">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}