import "../../styles/LogementHeader.css"
import Rating from "../Rating"
function LogementHeader({ title, name, picture, location, tags, rating }) {
  return (
    <div className='logementheader'>
      <div className='logement_title_location'>
        <div className='logement_title'>{title}</div>
        <div className='logement_location'>{location}</div>
        <div className='tags'>
          {tags.map((tag, index) => (
            <div key={"tag" + index} className='tag'>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className='name_rating'>
        <div className='logement_name_picture'>
          <div className='logement_name'>
            {name.split(" ").map((item, ind) => (
              <div key={"n_" + ind}>{item}</div>
            ))}
          </div>
          <div className='logement_picture'>
            <img src={picture} alt={name} />
          </div>
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  )
}

export default LogementHeader
