import "../../styles/Houses.css"
// mport { Link } from 'react-router-dom'

function HouseCard({ id, title, image }) {
  return (
    <div id={id} className='housecard'>
      <img src={image} alt={title} className='cover' />
      <div className='title'>{title}</div>
    </div>
  )
}

export default HouseCard
