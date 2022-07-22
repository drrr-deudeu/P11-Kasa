import HouseCard from '../HouseCard'
import '../../styles/Houses.css'
import {useFetch} from '../../hooks/useFetch'
import {Link} from 'react-router-dom'
function Houses(){
    const { data, isLoading, error } = useFetch(
        `/datas/logements.json`
        )
    if(error){
        return(<div>Error:{error}</div>)
    }
    if(data.length && !isLoading){
        return(
        <div className="cards">
            {data.map((house,ind) =>(<Link to="/" key={house.id} id={ind}>
            <HouseCard id={house.id} title={house.title} image={house.cover}/></Link>))}</div>)
    }
}

export default Houses