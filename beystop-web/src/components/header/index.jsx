
import './style.css'
import Logo from "../../assets/images/logo.svg"
import { useState } from 'react';

export const Header = () =>{
     const [menuOpen, setMenuOpen] = useState(false);
    return(
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
                    <li>Veículos Ativos</li>
                    <li>Liberação</li>
                    <li>Retirada</li>
                </ul>
            </nav>

           
            <div className={`btns-header ${menuOpen ? "active" : ""}`}>
                <a className="btn-login"href="">Login</a>
                <a className="btn-cadastro" href="">Cadastra-se</a>
            </div>
        
        </header>

    )
}