import { useParams } from 'react-router-dom'
import NotFound from '../NotFound';
import {useFetch} from '../../utils/useFetch'
import Gallery from '../../components/Gallery';
import Presentation from '../../components/Presentation'
import Header from '../../components/Header'
import '../../styles/PageContainer.css'

function FicheLogement(){
    const { data, isLoading, error } = useFetch(
        `/datas/logements.json`
        )
    let params = useParams();
    if(!params.logementId){
        return(<NotFound/>)
    }
    if(error){
        return(<div>Error:{error}</div>)
    }
    if(data.length && !isLoading){
        const logement = (data.find(logement => (logement.id === params.logementId)))
        if(!logement)return(<NotFound />)
        return(<div className="page_container">
                    <Header />
                    <main id="main_logement" className="main_logement">
                        <Gallery move={0} pictures={logement.pictures} />
                        <Presentation logement={logement}/>
                    </main>
                </div>)
    }
}
export default FicheLogement