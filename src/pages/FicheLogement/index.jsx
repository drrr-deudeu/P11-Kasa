import { useParams } from 'react-router-dom'
import NotFound from '../NotFound';
import {useFetch} from '../../hooks/useFetch'
import Gallery from '../../components/Gallery';
import Presentation from '../../components/Presentation'
function FicheLogement(){
    const { data, isLoading, error } = useFetch(
        `/datas/logements.json`
        )
    let params = useParams();
    //console.log(params)
    if(!params.logementId){
        return(<NotFound/>)
    }
    if(error){
        return(<div>Error:{error}</div>)
    }
    if(data.length && !isLoading){
        const logement = (data.find(logement => (logement.id === params.logementId)))
        if(!logement)return(<NotFound />)
        return(<main><Gallery move={0} pictures={logement.pictures} /><Presentation logement={logement}/></main>)
    }
}
export default FicheLogement