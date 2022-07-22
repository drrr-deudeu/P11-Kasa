import '../../index.css'
import '../../styles/Header.css'
import {Link} from 'react-router-dom'
function Header(){
    return(<header>
        <div><img src="/assets/Kasa.jpg" alt="Kasa"/></div>
        <menu><ul><li><Link to="/" className="accueil">Accueil</Link></li><li><Link to="/apropos" className="apropos">A Propos</Link></li>
        </ul></menu></header>)
}

export default Header