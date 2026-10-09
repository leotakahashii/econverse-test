import './SectionTitle.scss'

interface SectionTitleProps {
    // Texto que aparece no meio, entre as duas linhas.
    title: string
}

// Título de seção com uma linha de cada lado, como no layout do Figma.
export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="section-title">
            <h2 className="section-title__text">{title}</h2>
        </div>
    )
}