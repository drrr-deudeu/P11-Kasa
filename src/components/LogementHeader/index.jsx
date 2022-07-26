import '../../styles/LogementHeader.css'
function LogementHeader({title,name,picture,location}){
    return(
    <div className="logementheader">
        <div className="logement_title_location">
            <div className="logement_title">{title}</div>
            <div className="logement_location">{location}</div>
        </div>
        <div className="logement_name_picture">
            <div className="logement_name">
                {name.split(" ").map((item) => (<div>{item}</div>))}
            </div>
            <div className="logement_picture"><img src={picture} alt={name}/></div>
        </div>
    </div>)
}

export default LogementHeader