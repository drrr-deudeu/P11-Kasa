import "../../styles/Gallery.css"
import { useState } from "react"

function Gallery({ move, pictures }) {
  const [index, setIndex] = useState(0)

  return (
    <div className='gallery'>
      <div className='gallery_image'>
        <img src={pictures[index]} alt='logement view' />
      </div>
      <div className='container_arrows'>
        <div className='arrows'>
          {pictures.length > 1 && (
            <div className='arrow_left'>
              <img
                src='/assets/arrow_left.png'
                alt='previous'
                onClick={() =>
                  index ? setIndex(index - 1) : setIndex(pictures.length - 1)
                }
              />
            </div>
          )}
          {pictures.length > 1 && (
            <div className='arrow_right'>
              <img
                src='/assets/arrow_right.png'
                alt='next'
                onClick={() => setIndex((index + 1) % pictures.length)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Gallery
