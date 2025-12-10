
import './style.css'
import Logo from "../../assets/images/logo.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <img src={Logo} alt="imagem da beyonce" />

            <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-header ${menuOpen ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link to="/veiculosativos">Veículos Ativos</Link>
                    </li>
                    <li>
                        <Link to="/liberacao">Liberação</Link>
                    </li>
                    <li>
                        <Link to="/retirada">Retirada</Link>
                    </li>
                </ul>
            </nav>


            <div className={`btns-header ${menuOpen ? "active" : ""}`}>

                <Link className="btn-login" to="/login">Login</Link>

                <Link className="btn-cadastro" to="/cadastro">Cadastrar-se</Link>
            </div>

        </header>

    )
}