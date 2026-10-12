import { useState } from 'react'
import { useProducts } from './hooks/useProducts'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { CategoryShortcuts } from './components/CategoryShortcuts'
import { ProductShowcase } from './components/ProductShowcase'
import { PartnerBanners } from './components/PartnerBanners'
import { BrandNavigator } from './components/BrandNavigator'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { ProductModal } from './components/ProductModal'
import { Reveal } from './components/Reveal'
import type { Product } from './types/products'

// Componente principal: busca os produtos, mostra a página e controla o modal.
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
        <Banner />

        <Reveal>
          <CategoryShortcuts />
        </Reveal>

        {/* Vitrine 1 (com abas) e o primeiro par de banners. */}
        <Reveal>
          <ProductShowcase
            title="Produtos relacionados"
            products={products}
            onSelectProduct={setSelectedProduct}
          />
        </Reveal>
        <Reveal>
          <PartnerBanners />
        </Reveal>

        {/* Vitrine 2 (com "Ver todos") e o segundo par de banners. */}
        <Reveal>
          <ProductShowcase
            title="Produtos relacionados"
            products={products}
            onSelectProduct={setSelectedProduct}
            showTabs={false}
          />
        </Reveal>
        <Reveal>
          <PartnerBanners />
        </Reveal>

        {/* Navegue por marcas e vitrine 3 (com "Ver todos"). */}
        <Reveal>
          <BrandNavigator />
        </Reveal>
        <Reveal>
          <ProductShowcase
            title="Produtos relacionados"
            products={products}
            onSelectProduct={setSelectedProduct}
            showTabs={false}
          />
        </Reveal>

        {/* Só mostra o modal quando há um produto selecionado. */}
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </main>

      <Reveal>
        <Newsletter />
      </Reveal>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  )
}

export default App