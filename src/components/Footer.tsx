import logo from '../assets/logo.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import './Footer.scss'

// As três colunas de links, na ordem do Figma. Manter em uma lista evita repetir o mesmo HTML três vezes.
const LINK_COLUMNS = [
    { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
    { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
    { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
]

const SOCIAL_LINKS = [
    { name: 'Instagram', icon: instagram },
    { name: 'Facebook', icon: facebook },
    { name: 'LinkedIn', icon: linkedin },
]

// Rodapé da página: marca e redes sociais à esquerda, links à direita.
export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__inner">
                    <div className="footer__brand">
                        <img src={logo} alt="Econverse" width="164" height="49" />
                        <p className="footer__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <ul className="footer__social">
                            {SOCIAL_LINKS.map(({ name, icon }) => (
                                <li key={name}>
                                    {/* O ícone não tem texto, então o aria-label dá o nome ao link. */}
                                    <a href="#" aria-label={name}>
                                        <img src={icon} alt="" width="24" height="24" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <nav className="footer__nav" aria-label="Links do rodapé">
                        {LINK_COLUMNS.map((column) => (
                            <div key={column.title}>
                                <h2 className="footer__column-title">{column.title}</h2>
                                <ul className="footer__links">
                                    {column.links.map((link) => (
                                        <li key={link}>
                                            <a className="footer__link" href="#">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            <p className="footer__copyright">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </footer>
    )
}