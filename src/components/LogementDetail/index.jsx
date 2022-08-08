import Collapse from "../Collapse"
import "../../styles/LogementDetail.css"
import PropTypes from "prop-types"
function LogementDetail(props) {
  const { description, equipments } = props
  const equipements = equipments.map((equip) => equip)
  return (
    <section className='logement_detail'>
      <Collapse
        title={"Description"}
        text={description}
        prefix={"detail_"}
        index={0}
        specificClass={"logement"}
      />
      <Collapse
        title={"Équipements"}
        text={equipements}
        prefix={"detail_"}
        index={1}
        cut={true}
        specificClass={"logement"}
      />
    </section>
  )
}

LogementDetail.propTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.array.isRequired,
}
export default LogementDetail
