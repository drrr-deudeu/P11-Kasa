import '../../styles/NotFound.css'
import {Link} from 'react-router-dom'
function NotFound(){
    return(<main className="notfound">
        <div><span className="code">404</span> </div>
        <div><span className="oups">Oups! La page que vous demandez n'existe pas.</span></div>
        <div className='retour_accueil'><Link to="/" className="navlink">Retourner sur la page d’accueil</Link></div>
        </main>)
}

export default NotFound