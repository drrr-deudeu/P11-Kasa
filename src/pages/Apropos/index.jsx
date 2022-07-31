import '../../styles/Apropos.css'
import Slogan from '../../components/Slogan'
import Valeurs from '../../components/Valeurs'
import Header from '../../components/Header'
import '../../styles/PageContainer.css'
function Apropos(){
    return(<div className="page_container"><Header /><main id="main_about" className="main_about"><Slogan home={false}/><div className="about"><Valeurs /></div></main></div>)
}

export default Apropos