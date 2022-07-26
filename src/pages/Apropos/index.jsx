import '../../styles/Apropos.css'
import Slogan from '../../components/Slogan'
import Valeurs from '../../components/Valeurs'
function Apropos(){
    return(<main><Slogan home={false}/><div className="about"><Valeurs /></div></main>)
}

export default Apropos