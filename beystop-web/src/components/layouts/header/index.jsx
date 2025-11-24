import './style.css'
import Logo from "../../../assets/images/logo.svg"

export const Header = () =>{
    return(
        <header>
            <img src={Logo} alt="imagem da beyonce" />
            <nav className='nav-header'>
                <ul>
                    <li>Veículos Ativos</li>
                    <li>Liberação</li>
                    <li>Retirada</li>
                </ul>
            </nav>

           
            <div className="btns-header">
                <a className="btn-login"href="">Login</a>
                <a className="btn-cadastro" href="">Cadastra-se</a>
            </div>
        
        </header>

    )
}