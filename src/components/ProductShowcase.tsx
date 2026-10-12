import type { Product } from '../types/products'
import { CategoryTabs } from './CategoryTabs'
import { ProductList } from './ProductList'
import { SectionTitle } from './SectionTitle'
import './ProductShowcase.scss'

interface ProductShowcaseProps {
  // Título da seção, que aparece entre as duas linhas.
  title: string
  products: Product[]
  onSelectProduct: (product: Product) => void
}

// Vitrine completa: título, abas de categoria e carrossel de produtos.
// Agrupar as três partes permite repetir a vitrine na página sem duplicar código.
export function ProductShowcase({ title, products, onSelectProduct }: ProductShowcaseProps) {
  return (
    // aria-label dá um nome à seção para leitores de tela.
    <section className="product-showcase" aria-label={title}>
      <SectionTitle title={title} />
      <CategoryTabs />
      <ProductList products={products} onSelectProduct={onSelectProduct} />
    </section>
  )
}