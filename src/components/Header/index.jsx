import "../../index.css"
import "../../styles/Header.css"
import { Link } from "react-router-dom"
function Header() {
  return (
    <div className='header_container'>
      <div className='header'>
        <div className='header_image'>
          <img src='/assets/Kasa-logo.png' alt='Kasa' />
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/' className='accueil'>
                Accueil
              </Link>
            </li>
            <li>
              <Link to='/apropos' className='apropos'>
                A Propos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
