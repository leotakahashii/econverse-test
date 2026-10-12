import bannerImage from '../assets/banner-black-friday.png'
import './Banner.scss'

// Banner principal da página, com imagem de fundo, título e botão.
export function Banner() {
    return (
        // aria-labelledby liga a seção ao título, para leitores de tela.
        <section className="banner" aria-labelledby="banner-title">
            {/* A imagem é só decoração (o texto está em HTML), por isso o alt vazio. */}
            <img className="banner__image" src={bannerImage} alt="" />
            {/* Camada escura à esquerda, para o texto ficar legível sobre a foto. */}
            <div className="banner__overlay" aria-hidden="true" />

            <div className="banner__content">
                {/* Este é o título principal da página, por isso é um h1. */}
                <h1 id="banner-title" className="banner__title">
                    Venha conhecer nossas promoções
                </h1>
                <p className="banner__offer">
                    <strong>50% Off</strong> nos produtos
                </p>
                <a className="banner__button" href="#">
                    Ver produto
                </a>
            </div>
        </section>
    )
}