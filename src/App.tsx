import { useProducts } from './hooks/useProducts'
import { ProductCard } from './components/ProductCard'


function App() {
  // Chama o hook e pega os três valores que ele devolve.
  const { products, loading, error } = useProducts()

  // Enquanto a busca está em andamento, mostra uma mensagem de carregamento.
  if (loading) return <p>Carregando...</p>

  // Se a busca falhou, mostra a mensagem de erro guardada no hook.
  if (error) return <p>{error}</p>

  return (
    <main>
      <h1>Vitrine de produtos</h1>
      <section>
        {/* Para cada produto da lista, desenha um ProductCard. */}
        {products.map((product) => (
          <ProductCard key={product.productName} product={product} />
        ))}
      </section>
    </main>
  )
}

export default App