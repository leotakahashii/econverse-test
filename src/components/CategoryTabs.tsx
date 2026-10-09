import { useState } from 'react'
import './CategoryTabs.scss'

const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']

export function CategoryTabs() {
    const [activeTab, setActiveTab] = useState(TABS[0])

    return (
        <div className="category-tabs" role="group" aria-label="Categorias de produtos">
            {TABS.map((tab) => (
                <button
                    key={tab}
                    type="button"
                    className={`category-tabs__tab ${tab === activeTab ? 'category-tabs__tab--active' : ''}`}
                    aria-pressed={tab === activeTab}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}