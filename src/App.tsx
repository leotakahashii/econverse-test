import { useState } from 'react'
import { useProducts } from './hooks/useProducts'
import { Header } from './components/Header'
import { ProductShowcase } from './components/ProductShowcase'
import { ProductModal } from './components/ProductModal'
import type { Product } from './types/products'

// Componente principal: busca os produtos, mostra a vitrine e controla o modal.
function App() {
  // Chama o hook e pega os três valores que ele devolve.
  const { products, loading, error } = useProducts()

  // Guarda o produto clicado. Começa como null, ou seja, nenhum produto selecionado.
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Enquanto a busca está em andamento, mostra uma mensagem de carregamento.
  if (loading) return <p>Carregando...</p>

  // Se a busca falhou, mostra a mensagem de erro guardada no hook.
  if (error) return <p>{error}</p>

  return (
    <>
      <Header />

      <main>
        <h1>Vitrine de produtos</h1>

        {/* Título, abas e carrossel agrupados em um só componente. */}
        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          onSelectProduct={setSelectedProduct}
        />

        {/* Só mostra o modal quando há um produto selecionado. */}
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </main>
    </>
  )
}

export default App