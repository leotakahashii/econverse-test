import { useProducts } from './hooks/useProducts'
import { ProductList } from './components/ProductList'
import { useState } from 'react'
import type { Product } from './types/products'


function App() {
  // Aqui vai chamar o hook e pegar os três valores que ele devolve.
  const { products, loading, error } = useProducts()
    // Aqui vai guardar o produto clicado. Começando como null, ou seja, nenhum produto selecionado.
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Enquanto a busca está em andamento, vai mostrar uma mensagem de carregamento.
  if (loading) return <p>Carregando...</p>

  // Se a busca falhar, vai mostrar uma mensagem de erro que está guardada no hook.S
  if (error) return <p>{error}</p>

  return (
    <main>
      <h1>Vitrine de produtos</h1>
      <ProductList 
      products={products}
      onSelectProduct={(product) => {
        setSelectedProduct(product)
        console.log('Produto selecionado:', product)
      }}
      />
    </main>
  )
}

export default App