import "../../styles/Collapse.css"
import PropTypes from "prop-types"
import { useState } from "react"

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false)
  const { title, text, prefix, index, cut = false, specificClass = "" } = props
  const toggleVisibility = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className='article'>
      <button
        className={"article_title " + specificClass}
        onClick={toggleVisibility}>
        <div>
          <span>{title}</span>
        </div>
        <div className='article_arrows' data-prefixindex={prefix + index}>
          {isOpen ? (
            <div
              id={"down_" + prefix + index}
              data-toggle={"up_" + prefix + index}
              data-prefixindex={prefix + index}
              className='opened '>
              <img src='/assets/arrow_up.png' alt='close article' />
            </div>
          ) : (
            <div
              id={"up_" + prefix + index}
              data-toggle={"down_" + prefix + index}
              data-prefixindex={prefix + index}
              className='closed'>
              <img src='/assets/arrow_down.png' alt='open article' />
            </div>
          )}
        </div>
      </button>
      {isOpen && (
        <div
          id={"text_" + prefix + index}
          className={"article_text " + specificClass}>
          {cut ? (
            text.map((line, ind) => <p key={"cut_" + ind}>{line}</p>)
          ) : (
            <p>{text}</p>
          )}
        </div>
      )}
    </div>
  )
}

Collapse.propsTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  cut: PropTypes.bool,
  specificClass: PropTypes.string,
}

Collapse.defaultProps = {
  cut: false,
  specificClass: "",
}
export default Collapse
