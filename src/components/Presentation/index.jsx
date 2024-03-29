import LogementHeader from "../LogementHeader"
import LogementDetail from "../LogementDetail"
function Presentation({ logement }) {
  return (
    <section className='presentation'>
      <LogementHeader
        title={logement.title}
        name={logement.host.name}
        picture={logement.host.picture}
        location={logement.location}
        tags={logement.tags}
        rating={logement.rating}
      />
      <LogementDetail
        description={logement.description}
        equipments={logement.equipments}
      />
    </section>
  )
}

export default Presentation
