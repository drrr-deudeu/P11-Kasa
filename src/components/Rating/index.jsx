function Rating({rating}){
    const stars = []
    for(let i=0;i<rating;i++){
        stars.push(<div key={"rated"+i} className="redstar">
        <img src="/assets/RedStar.png" alt="rated"/>
        </div>)
    }
    for(let i=rating;i<5;i++){
        stars.push(<div key={"nonrated"+i} className="redstar">
        <img src="/assets/GreyStar.png" alt="nonrated"/>
        </div>)
    }
    return(
        <div className="rating">{stars}</div>
    )
}
export default Rating