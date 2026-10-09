import { useState } from 'react'
import { useProducts } from './hooks/useProducts'
import { ProductList } from './components/ProductList'
import { ProductModal } from './components/ProductModal'
import type { Product } from './types/products'
import { SectionTitle } from './components/SectionTitle'
import { CategoryTabs } from './components/CategoryTabs'

// Componente principal: busca os produtos, mostra a vitrine e controla o modal.
function App() {
  const { products, loading, error } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <main>
      <h1>Vitrine de produtos</h1>
      <SectionTitle title="Produtos relacionados" />
      {/* Ao clicar em um card, o produto vai para o estado selectedProduct. */}
      <CategoryTabs />
      <ProductList products={products} onSelectProduct={setSelectedProduct} />
      {/* Só mostra o modal quando há um produto selecionado. */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  )
}

export default App