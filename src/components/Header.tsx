import shieldCheck from '../assets/ShieldCheck.svg'
import truck from '../assets/Truck.svg'
import creditCard from '../assets/CreditCard.svg'
import logo from '../assets/logo.svg'
import lupa from '../assets/Lupa.svg'
import gift from '../assets/Gift.svg'
import heart from '../assets/Heart.svg'
import user from '../assets/User.svg'
import cart from '../assets/ShoppingCart.svg'
import './Header.scss'

// Cabeçalho da página: faixa de benefícios, logo, busca e ícones.
// O menu de categorias entra no próximo passo.
export function Header() {
  return (
    <header className="header">
      <ul className="header__benefits">
        <li className="header__benefit">
          <img src={shieldCheck} alt="" width="20" height="20" />
          <span>
            Compra <strong>100% segura</strong>
          </span>
        </li>
        <li className="header__benefit">
          <img src={truck} alt="" width="20" height="20" />
          <span>
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
        </li>
        <li className="header__benefit">
          <img src={creditCard} alt="" width="20" height="20" />
          <span>
            <strong>Parcele</strong> suas compras
          </span>
        </li>
      </ul>

      <div className="header__main">
        {/* O logo é um link para a página inicial. O alt descreve a marca. */}
        <a className="header__logo" href="/">
          <img src={logo} alt="Econverse" width="139" height="42" />
        </a>

        {/* role="search" avisa leitores de tela que este formulário é uma busca.
            O preventDefault impede a página de recarregar ao enviar (a busca em si ainda não existe). */}
        <form className="header__search" role="search" onSubmit={(event) => event.preventDefault()}>
          <input
            className="header__search-input"
            type="search"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <button className="header__search-button" type="submit" aria-label="Buscar">
            <img src={lupa} alt="" width="28" height="28" />
          </button>
        </form>

        <div className="header__actions">
          <button type="button" aria-label="Meus pedidos">
            <img src={gift} alt="" width="24" height="24" />
          </button>
          <button type="button" aria-label="Favoritos">
            <img src={heart} alt="" width="32" height="32" />
          </button>
          <button type="button" aria-label="Minha conta">
            <img src={user} alt="" width="32" height="32" />
          </button>
          <button type="button" aria-label="Carrinho">
            <img src={cart} alt="" width="32" height="32" />
          </button>
        </div>
      </div>
    </header>
  )
}