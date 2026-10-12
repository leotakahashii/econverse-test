import { useState } from 'react'
import tecnologia from '../assets/categoria-tecnologia.png'
import supermercado from '../assets/categoria-supermercado.png'
import bebidas from '../assets/categoria-bebidas.png'
import ferramentas from '../assets/categoria-ferramentas.png'
import saude from '../assets/categoria-saude.png'
import esportes from '../assets/categoria-esporte.png'
import moda from '../assets/categoria-moda.png'
import './CategoryShortcuts.scss'

// Lista de categorias, na ordem do Figma. Cada uma tem um nome e um ícone.
// Manter os dados em uma lista evita repetir o mesmo bloco de HTML sete vezes.
const CATEGORIES = [
    { name: 'Tecnologia', icon: tecnologia },
    { name: 'Supermercado', icon: supermercado },
    { name: 'Bebidas', icon: bebidas },
    { name: 'Ferramentas', icon: ferramentas },
    { name: 'Saúde', icon: saude },
    { name: 'Esportes e Fitness', icon: esportes },
    { name: 'Moda', icon: moda },
]

// Faixa de atalhos de categoria, logo abaixo do banner.
export function CategoryShortcuts() {
    // Guarda a categoria selecionada. Começa na primeira, como no Figma.
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].name)

    return (
        <section className="category-shortcuts" aria-label="Compre por categoria">
            <ul className="category-shortcuts__list">
                {CATEGORIES.map(({ name, icon }) => (
                    <li key={name}>
                        <button
                            type="button"
                            // Monto a classe: sempre "category-shortcuts__item", e acrescento o modificador se for a ativa.
                            className={`category-shortcuts__item ${name === activeCategory ? 'category-shortcuts__item--active' : ''}`}
                            // aria-pressed avisa leitores de tela qual botão está selecionado.
                            aria-pressed={name === activeCategory}
                            onClick={() => setActiveCategory(name)}
                        >
                            <span className="category-shortcuts__box">
                                {/* alt vazio porque o nome da categoria já aparece em texto logo abaixo. */}
                                <img className="category-shortcuts__icon" src={icon} alt="" width="61" height="61" />
                            </span>
                            <span className="category-shortcuts__label">{name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}