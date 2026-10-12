import './BrandNavigator.scss'
import econverseLogo from '../assets/logo-marcas.png'

interface Brand {
  id: number
  name: string
  imageUrl: string
}

// No Figma as cinco marcas usam o mesmo logo, então repito o mesmo dado.
const brands: Brand[] = [
  { id: 1, name: 'Econverse', imageUrl: econverseLogo },
  { id: 2, name: 'Econverse', imageUrl: econverseLogo },
  { id: 3, name: 'Econverse', imageUrl: econverseLogo },
  { id: 4, name: 'Econverse', imageUrl: econverseLogo },
  { id: 5, name: 'Econverse', imageUrl: econverseLogo },
]

// Seção "Navegue por marcas": uma fileira de links, cada um com o logo da marca.
export function BrandNavigator() {
  return (
    // aria-labelledby liga a seção ao título, para leitores de tela.
    <section className="brand-navigator" aria-labelledby="brand-navigator-title">
      <h2 id="brand-navigator-title" className="brand-navigator__title">
        Navegue por marcas
      </h2>

      <ul className="brand-navigator__list">
        {brands.map((brand) => (
          <li key={brand.id}>
            {/* O alt da imagem dá o nome acessível ao link. */}
            <a className="brand-navigator__card" href="#">
              <img className="brand-navigator__image" src={brand.imageUrl} alt={brand.name} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}