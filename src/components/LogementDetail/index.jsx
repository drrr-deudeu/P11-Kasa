import Article from "../Article"
import "../../styles/LogementDetail.css"
function LogementDetail({ description, equipments }) {
  const equipements = equipments.map((equip) => equip)
  return (
    <section className='logement_detail'>
      <Article
        title={"Description"}
        text={description}
        prefix={"detail_"}
        index={0}
      />
      <Article
        title={"Équipements"}
        text={equipements}
        prefix={"detail_"}
        index={1}
        cut={true}
      />
    </section>
  )
}
export default LogementDetail
