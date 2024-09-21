import './Header.scss'
import Logo from '/images/logo.svg'

export default function Header() {

    return (
        <header>
            <img src={Logo} alt="Splitter Logo"/>
        </header>
    )
}