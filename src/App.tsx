import { useProducts } from './hooks/useProducts'

// Versão temporária: lista só os nomes para confirmar que os dados chegam.
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
      <p>Total: {products.length}</p>
      <ul>
        {/* map percorre a lista e cria um <li> para cada produto.
            A key ajuda o React a identificar cada item da lista. */}
        {products.map((product) => (
          <li key={product.productName}>{product.productName}</li>
        ))}
      </ul>
    </main>
  )
}

export default App