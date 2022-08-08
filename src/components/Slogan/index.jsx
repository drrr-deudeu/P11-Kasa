import "../../styles/Slogan.css"
import PropTypes from "prop-types"
function Slogan(props) {
  const isHome = props.isHome
  return (
    <section className='slogan_container'>
      {isHome ? (
        <section className='slogan'>
          {/* <div className='image'>
            <img src='/assets/Paysage.png' alt='Chez Kasa' />
          </div> */}
          <div className='text'>
            <span>Chez vous, partout et ailleurs</span>
          </div>
        </section>
      ) : (
        <section className='slogan2'>
          <div></div>
        </section>
      )}
    </section>
  )
}

Slogan.propTypes = {
  isHome: PropTypes.bool.isRequired,
}

export default Slogan
