import shieldCheck from '../assets/ShieldCheck.svg'
import truck from '../assets/Truck.svg'
import creditCard from '../assets/CreditCard.svg'
import './Header.scss'

// Cabeçalho da página.
export function Header() {
    return (
        <header className="header">
            <ul className="header__benefits">
                <li className="header__benefit">
                    {/* alt vazio porque o ícone é decorativo: o texto ao lado já diz o mesmo. */}
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
        </header>
    )
}