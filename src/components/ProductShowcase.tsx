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
  // Quando true, mostra as abas de categoria. Quando false, mostra só o link "Ver todos".
  // O "?" torna a prop opcional, e o valor padrão (true) mantém o comportamento anterior.
  showTabs?: boolean
}

// Vitrine completa, título, abas ou o link  de "Ver todos" e carrossel de produtos.
// Agrupar as partes permite repetir a vitrine na página sem duplicar código.
export function ProductShowcase({
  title,
  products,
  onSelectProduct,
  showTabs = true,
}: ProductShowcaseProps) {
  return (
    // aria-label dá um nome à seção para leitores de tela.
    <section className="product-showcase" aria-label={title}>
      <SectionTitle title={title} />

      {showTabs ? (
        <CategoryTabs />
      ) : (
        <a className="product-showcase__see-all" href="#">
          Ver todos
        </a>
      )}

      <ProductList products={products} onSelectProduct={onSelectProduct} />
    </section>
  )
}