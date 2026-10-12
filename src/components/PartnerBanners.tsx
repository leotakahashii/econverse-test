import partnerPhoto from '../assets/banner-apoio.png'
import './PartnerBanners.scss'

// Os dois banners lado a lado. Os textos são iguais no Figma, então uso uma lista
// com dois itens e evito repetir o mesmo bloco de HTML.
const BANNERS = [
    { id: 1, title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur', button: 'Confira' },
    { id: 2, title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur', button: 'Confira' },
]

// Par de banners de parceiros. Aparece duas vezes na página, por isso é um componente.
export function PartnerBanners() {
    return (
        <section className="partner-banners">
            {BANNERS.map((banner) => (
                <article key={banner.id} className="partner-banners__banner">
                    {/* A foto é só decoração (o texto está em HTML), por isso o alt vazio. */}
                    <img className="partner-banners__image" src={partnerPhoto} alt="" />
                    {/* Camada escura na parte de baixo, para o texto ficar legível sobre a foto. */}
                    <div className="partner-banners__overlay" aria-hidden="true" />

                    <div className="partner-banners__content">
                        <h2 className="partner-banners__title">{banner.title}</h2>
                        <p className="partner-banners__text">{banner.text}</p>
                        <a className="partner-banners__button" href="#">
                            {banner.button}
                        </a>
                    </div>
                </article>
            ))}
        </section>
    )
}