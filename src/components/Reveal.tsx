import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'
import './Reveal.scss'

interface RevealProps {
    // elementos, componentes, textos. É o que vem entre as tags <Reveal>...</Reveal>.
    children: ReactNode
}

export function Reveal({ children }: RevealProps) {
    // Aqui eu digo ao hook que o elemento observado é uma div.
    const { ref, inView } = useInView<HTMLDivElement>()

    return (
        // O ref liga a div ao observador, a classe --visible só entra quando
        // o elemento já apareceu, e é ela que vai disparar a animação no CSS.
        <div ref={ref} className={`reveal ${inView ? 'reveal--visible' : ''}`}>
            {children}
        </div>
    )
}