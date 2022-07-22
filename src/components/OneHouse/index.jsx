import '../../styles/Houses.css'

function OneHouse({id,title,image}){
    return(<div id={id} className="house">
        <img src={image} alt={title} className="cover"/>
        <div className="title">{title}</div></div>)
}

export default OneHouse